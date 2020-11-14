
export default {
  install(Vue, options) {
    Vue.prototype.formatterDate = function (date) {//全局函数1
      let year = date.getFullYear()   //获取完整的年份(4位,1970-????)
      let month = date.getMonth() + 1
      let day = date.getDate()
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let hh = date.getHours()
      if (hh < 10) {
        hh = '0' + hh
      }
      let mm = date.getMinutes()
      if (mm < 10) {
        mm = '0' + mm
      }
      let ss = date.getSeconds()
      if (ss < 10) {
        ss = '0' + ss
      }
      // return year+'-'+month+'-'+day+' '+hh+':'+mm+':'+ss
      return year + '-' + month + '-' + day
    }
    Vue.prototype.getDate = function (s){
      return new Date(s.replace(/-/g,'/'))
    }
    Vue.prototype.toDecimal = function (x){
      let f = parseFloat(x);
      if (isNaN(f)) {
        return;
      }
      f = Math.round(x*100)/100;
      return f;
    }
  }
}



