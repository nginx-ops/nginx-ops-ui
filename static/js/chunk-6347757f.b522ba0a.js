(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6347757f"],{3528:function(e,t,r){"use strict";var a=r("b775");t["e"]={getRole:function(e){return Object(a["a"])({url:"/sys/role/"+e,method:"get"})},listRole:function(e){return Object(a["a"])({url:"/sys/role/page",method:"get",data:e})},addRole:function(e){return Object(a["a"])({url:"/sys/role",method:"post",data:e})},updateRole:function(e){return Object(a["a"])({url:"/sys/role",method:"put",data:e})},delRole:function(e){return Object(a["a"])({url:"/sys/role/"+e,method:"delete"})}}},a17e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"选择用户",visible:e.visible,width:"800px",top:"5vh","append-to-body":""},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0}},[r("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[r("el-input",{attrs:{placeholder:"请输入用户名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{attrs:{placeholder:"请输入手机号码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",[r("el-table",{ref:"table",attrs:{data:e.userList,height:"260px"},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:"用户名称",prop:"userName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"用户昵称",prop:"nickName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"手机",prop:"phonenumber","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.sys_normal_disable,value:t.row.status}})]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSelectUser}},[e._v("确 定")]),r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")])],1)],1)},o=[],l=(r("a9e3"),r("d81d"),r("a15b"),r("3528")),n={dicts:["sys_normal_disable"],props:{roleId:{type:[Number,String]}},data:function(){return{visible:!1,userIds:[],total:0,userList:[],queryParams:{pageNum:1,pageSize:10,roleId:void 0,userName:void 0,phonenumber:void 0}}},methods:{show:function(){this.queryParams.roleId=this.roleId,this.getList(),this.visible=!0},clickRow:function(e){this.$refs.table.toggleRowSelection(e)},handleSelectionChange:function(e){this.userIds=e.map((function(e){return e.userId}))},getList:function(){var e=this;Object(l["unallocatedUserList"])(this.queryParams).then((function(t){e.userList=t.rows,e.total=t.total}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectUser:function(){var e=this,t=this.queryParams.roleId,r=this.userIds.join(",");""!=r?Object(l["authUserSelectAll"])({roleId:t,userIds:r}).then((function(t){e.$modal.msgSuccess(t.msg),200===t.code&&(e.visible=!1,e.$emit("ok"))})):this.$modal.msgError("请选择要分配的用户")}}},s=n,i=r("2877"),u=Object(i["a"])(s,a,o,!1,null,null,null);t["default"]=u.exports}}]);