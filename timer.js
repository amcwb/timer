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
    this.date = null;
    this.lastStopped = null;
    this.skipped = 0;
  }
  
  run () {
    let that = this
    setInterval(function (){
      if (that.going) {
        if (!that.date) {
          that.date = Date.now();
        }
        
        var asString = new Date(Date.now() - that.date - that.skipped).toISOString().substr(11, 11);

        document.getElementById('counter').textContent = asString;
        window.document.title = "Timer – " + asString;
        
        document.getElementById('seconds').textContent = ((Date.now() - that.date - that.skipped) / 1000).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
      }
    }, 10)
  }
  
  toggle () {
    this.going = !this.going;
    if (!this.going) {
      this.lastStopped = Date.now()
    } else {
      // Stores milliseconds to be skipped from timer
      this.skipped += Date.now() - this.lastStopped;
    }
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
