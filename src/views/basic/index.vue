// basic
<template>
  <div>
    <!-- 上方部分 start -->
    基本参数配置
    <el-button type="text" @click="dialogFormVisible = true"
      >添加基本参数配置</el-button
    >
    <!-- 上方部分 end -->

    <!-- 添加基本参数配置的dialog弹窗 -->
    <el-dialog title="添加基本参数配置" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="值" :label-width="formLabelWidth">
          <el-input v-model="form.data" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
        <el-button type="primary" @click="add(form)">提交</el-button>
      </div>
    </el-dialog>

    <!-- 编辑操作的dialog弹窗 -->
    <el-dialog title="编辑" :visible.sync="isShow">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="值" :label-width="formLabelWidth">
          <el-input v-model="form.data" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">关闭</el-button>
        <el-button type="primary" @click="confirm(form)">提交</el-button>
      </div>
    </el-dialog>

    <!-- 下方table部分 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="值" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.data }}</el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "basic",
  data() {
    return {
      tableData: [
        {
          name: "moudle0",
          data: "/usr/lib/nginx/modules/ngx_stream_module.so",
          _index: 0,
        },
        {
          name: "moudle1",
          data: "/usr/lib/nginx/modules/ngx_stream_module.so",
          _index: 1,
        },
        {
          name: "moudle2",
          data: "/usr/lib/nginx/modules/ngx_stream_module.so",
          index: 2,
        },
      ],
      isShow: false, //控制编辑操作的dialog弹窗
      // dialogTableVisible: false,
      dialogFormVisible: false, //控制添加基本参数配置的dialog弹窗
      form: {
        name: "",
        data: "",
        _index: "", //标识
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 添加的确认
    add(e) {
      console.log('add');
      this.tableData.push(e);
      this.dialogFormVisible = false;
    },
    // 编辑的确认
    confirm(e) {
      console.log('confirm');
      let index = e._index;
      console.log(index, "index");
      console.log(this.tableData[index]);
      this.tableData[index].name = e.name;
      this.tableData[index].data = e.data;
      this.isShow = false;
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
      this.isShow = "ture";
      this.form.name = row.name;
      this.form.data = row.data;
      this.form._index = index;
    },
    // 删除
    // eslint-disable-next-line no-unused-vars
    handleDelete(index, row) {
      console.log('handleDelete');
      this.$confirm("此操作将永久删除该文件，是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let _arrTableData = this.tableData.filter((_d) => {
            return _d.name !== this.tableData[index].name;
          });
          this.tableData = _arrTableData;
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功",
          });
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
