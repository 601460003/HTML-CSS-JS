<template>
  <div>
    <Table :columns="columns1" :data="obj2"></Table>
  </div>
</template>
<script>
  const list = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  export default {
    data() {
      return {
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
        ],
        obj2: [],
        data1: [
          {
            name: '1',
          },
          {
            name: '1,2,3',
          },
          {
            name: '1,3,4',
          },
          {
            name: '0,1,2',
          }
        ]
      }
    },
    mounted() {
      this.data1.forEach(item => {
        var tempArr = [];
        item.name.split(',').forEach(li => {
          // console.log(this.list[li])
          if (this.list[li])
            tempArr.push(
              this.list[li]
            )
        })
        console.log('========================')
        this.obj2.push({
          name: tempArr.join(',')
        })

      })
    }
    mounted(){
      this.data1.forEach(item => {
        var tempArr = [];
        list.forEach((week, index) => {
          if (item.name.indexOf(index) > -1) {
            tempArr.push(week)
          }

        })
        this.obj2.push({
          name: tempArr.join(',')
        })
      })
      zhangs(){
        var s ='1,2,3'
        var a =s.split(',')
        console.log(a)
        console.log(this.zhang);
      }
    }
  }
</script>
