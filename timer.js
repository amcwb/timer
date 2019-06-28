//(function (){
//  setTimeout(function (){
//    document.body.style.backgroundColor = '#ff6961';
//  }, 100);
//  setTimeout(function (){
//    document.body.style.backgroundColor = '#aec6cf';
//  }, 1000);
//})()


class Timer {
  constructor () {
    this.time = 0;
    this.going = false;
  }
  
  run () {
    let that = this;
    setInterval(function (){
      if (that.going) {
        that.time += 0.01;
        var asString = new Date(that.time * 1000).toISOString().substr(11, 11);
//        var asString = that.time.toFixed(2).toString().padEnd(5, '0');
        document.getElementById('counter').textContent = asString;
        window.document.title = "Timer – " + asString;
        
        document.getElementById('seconds').textContent = that.time.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
      }
    }, 10)
  }
  
  toggle () {
    this.going = !this.going;
    return this.going;
  }
}

tim = new Timer();
tim.run();

document.body.addEventListener('click', function(e){
  var self = this;
  var color = tim.toggle() ? '#77dd77' : '#ff6961';
  this.style.background = color;
  setTimeout(function(){
      self.style.background = '#aec6cf';
  }, 700);
})