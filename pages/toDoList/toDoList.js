Page({
  data: {
    list: [
      { id: 0, taskName: "吃饭", status: 0 },
      { id: 1, taskName: "上班", status: 1 },
      { id: 2, taskName: "睡觉", status: 0 },
      { id: 3, taskName: "做作业", status: 1 },
    ],
    /* input框的默认值 */
    val: "",
    selectAll: "all",
    aa: [],

  },
  changeBtn(e) {

    const { status } = e.currentTarget.dataset;
    this.setData({ selectAll: status });
    this.fileterData();

  },
  formSubmit(e) {

    /* 获得输入框的值 */
    const { taskName } = e.detail.value;

    this.fileterData();

    /* 解构list数据 */
    const { list } = this.data;
    /* 判断有无输入 */
    if (!taskName) {
      return false;
    } else {
      /* 拼接对象数据 */
      const taskObj = {
        id: list.length,
        taskName,
        status: 0,
      };
      /* 向数组第一个位置添加 */
      list.unshift(taskObj);
      /* 更新数据，并且渲染界面 */
      this.setData({ list });
      /* 每次点击button按钮就清空input的值 */
      this.setData({ val: '' })

    }

  },
  fileterData() {
    const { selectAll, list } = this.data;
    console.log(selectAll);

    switch (selectAll) {
      case "all":
        return list;
      case "done":
        return (list.filter(item => { item.status }));

      case "undone":
        return list.filter(item => { !item.status });
    }
  }


})