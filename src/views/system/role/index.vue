<!--
 * @Description: 
 * @Author: wgy
 * @CreateTime: 2022-10-06 09:19:57
 * @UpdateTime: 2022-10-22 15:19:04
 * @FilePath: \HongYe-Vue\src\views\system\role\index.vue
-->
<!--  -->
<template>
  <div class="app-container">
    <!-- 查询表单 -->
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch">
      <el-form-item label="角色名称" prop="roleName">
        <el-input
          v-model="queryParams.roleName"
          placeholder="请输入角色名称"
          clearable
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="权限字符" prop="roleCode">
        <el-input
          v-model="queryParams.roleCode"
          placeholder="请输入权限字符"
          clearable
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="isEnable">
        <el-select
          v-model="queryParams.isEnable"
          placeholder="角色状态"
          clearable
          style="width: 240px"
        >
          <el-option label="正常" value="1" />
          <el-option label="停用" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="dateRange"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 操作栏 -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning" plain icon="el-icon-download" size="mini" @click="handleExport"
          >导出</el-button
        >
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <!-- 展示列表 -->
    <el-table v-loading="loading" :data="roleList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="角色编号" prop="id" width="200" />
      <el-table-column label="角色名称" prop="roleName" :show-overflow-tooltip="true" width="150" />
      <el-table-column label="权限字符" prop="roleCode" :show-overflow-tooltip="true" width="150" />
      <el-table-column label="显示顺序" prop="order" width="100" />
      <el-table-column label="状态" align="isEnable" width="100">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isEnable"
            active-value="1"
            inactive-value="0"
            @change="handleStatusChange(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope" v-if="scope.row.id !== 1">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row)"
            >删除</el-button
          >
          <!-- <el-dropdown
            size="mini"
            @command="(command) => handleCommand(command, scope.row)"
            v-hasPermi="['system:role:edit']"
          >
            <span class="el-dropdown-link">
              <i class="el-icon-d-arrow-right el-icon--right"></i>更多
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="handleDataScope" icon="el-icon-circle-check"
                v-hasPermi="['system:role:edit']">数据权限</el-dropdown-item>
              <el-dropdown-item command="handleAuthUser" icon="el-icon-user"
                v-hasPermi="['system:role:edit']">分配用户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 修改 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item prop="roleCode">
          <span slot="label">
            <el-tooltip
              content="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)"
              placement="top"
            >
              <i class="el-icon-question"></i>
            </el-tooltip>
            权限字符
          </span>
          <el-input v-model="form.roleCode" placeholder="请输入权限字符" />
        </el-form-item>
        <el-form-item label="角色顺序" prop="order">
          <el-input-number v-model="form.order" controls-position="right" :min="0" />
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.isEnable">
            <el-radio label="1">正常</el-radio>
            <el-radio label="0">停用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单权限">
          <!-- <el-checkbox v-model="menuExpand" @change="handleCheckedTreeExpand($event, 'menu')"
            >展开/折叠</el-checkbox
          >
          <el-checkbox v-model="menuNodeAll" @change="handleCheckedTreeNodeAll($event, 'menu')"
            >全选/全不选</el-checkbox
          >
          <el-checkbox
            v-model="form.menuCheckStrictly"
            @change="handleCheckedTreeConnect($event, 'menu')"
            >父子联动</el-checkbox
          > -->
          <el-tree
            class="tree-border"
            :data="menuOptions"
            show-checkbox
            ref="menu"
            node-key="id"
            empty-text="加载中，请稍候"
            :props="defaultProps"
          ></el-tree>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import menu from '@/api/system/menu';
import role from '@/api/system/role';
import { Message } from 'element-ui';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleName: undefined,
        roleCode: undefined,
        isEnable: undefined,
        beginTime: undefined,
        endTime: undefined,
      },
      // 日期范围
      dateRange: [],
      // 表单参数
      form: {},
      defaultProps: {
        children: 'children',
        label: 'menuName',
      },
      // 表单校验
      rules: {
        roleName: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }],
        roleCode: [{ required: true, message: '权限字符不能为空', trigger: 'blur' }],
        order: [{ required: true, message: '角色顺序不能为空', trigger: 'blur' }],
      },
      // 菜单列表
      menuOptions: [],
      // 角色表格数据
      roleList: [],
      // 选中数组
      ids: [],
      // 遮罩层
      loading: true,
      // 总条数
      total: 0,
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      title: '',
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /** 查询角色列表 */
    getList() {
      this.loading = true;
      role.listRole(this.addDateRange(this.queryParams, this.dateRange)).then((response) => {
        this.roleList = response.data;
        this.total = response.count;
        this.loading = false;
      });
    },
    // 角色状态修改
    handleStatusChange(row) {
      let text = row.isEnable === '1' ? '启用' : '停用';
      this.$confirm('确认要"' + text + '""' + row.roleName + '"角色吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return role.updateRole({ id: row.id, isEnable: row.isEnable });
        })
        .then(() => {
          Message.success(text + '成功');
        })
        .catch(function () {
          row.isEnable = row.isEnable === '0' ? '1' : '0';
        });
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map((item) => item.id);
      this.single = selection.length != 1;
      this.multiple = !selection.length;
    },
    // 表单重置
    reset() {
      //   if (this.$refs.menu != undefined) {
      //     this.$refs.menu.setCheckedKeys([]);
      //   }
      //   this.menuExpand = false;
      //   this.menuNodeAll = false;
      //   this.deptExpand = true;
      //   this.deptNodeAll = false;
      this.form = {
        id: undefined,
        roleName: undefined,
        roleCode: undefined,
        order: 0,
        isEnable: '1',
        updateMenuIdList: [],
        menuCheckStrictly: true,
        remark: undefined,
      };
      this.checkOptions = [];
      this.menuOptions = [];
      this.resetForm('form');
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm');
      this.handleQuery();
    },
    /** 查询菜单树结构 */
    getMenuTreeselect() {
      menu.listMenu().then((response) => {
        this.menuOptions = this.handleTree(response.data, 'id');
      });
    },
    // 所有菜单节点数据
    getMenuAllCheckedKeys() {
      // 目前被选中的菜单节点
      let checkedKeys = this.$refs.menu.getCheckedKeys();
      // 半选中的菜单节点
      let halfCheckedKeys = this.$refs.menu.getHalfCheckedKeys();
      checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
      return checkedKeys;
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.getMenuTreeselect();
      this.open = true;
      this.title = '添加角色';
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const roleId = row.id || this.ids;
      // 获取全部菜单
      this.getMenuTreeselect();
      
      role.getRole(roleId).then((response) => {
        this.form = response.data;
        // 填充已选中菜单
        this.$nextTick(() => {
          let checkedKeys = response.data.selectMenuIdList
            checkedKeys.forEach((v) => {
                this.$nextTick(()=>{
                    this.$refs.menu.setChecked(v, true ,false);
                })
            })
        });
        this.open = true;
        this.title = '修改角色';
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const roleIds = row.id || this.ids;
      this.$confirm('是否确认删除名称为"' + roleIds + '"的数据项？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return role.delRole(roleIds);
        })
        .then(() => {
          this.getList();
          Message.success('删除成功');
        })
        .catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download(
        'system/role/export',
        {
          ...this.queryParams,
        },
        `role_${new Date().getTime()}.xlsx`
      );
    },
    /** 提交按钮 */
    submitForm: function () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.id != undefined) {
            this.form.updateMenuIdList = this.getMenuAllCheckedKeys();
            role.updateRole(this.form).then(() => {
              Message.success('修改成功');
              this.open = false;
              this.getList();
            });
          } else {
            this.form.updateMenuIdList = this.getMenuAllCheckedKeys();
            role.addRole(this.form).then(() => {
              Message.success('新增成功');
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>


<style scoped>
/* @import url(); 引入公共css类 */
</style>