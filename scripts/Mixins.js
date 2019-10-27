let Mixins = {
  Logs : {
    success : function(message) {
      console.log('%c ' + message , 'color : #27ae60');
    },
    error : function(message) {
      console.log('%c ' + message , 'color : #c0392b');
    }
  }
}


export default Mixins;
