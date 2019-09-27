class dropdown {

  constructor(target) {
    this.targets = target;
    this.initiator = '.js-dropdown-init';
  }

  init() {
    var arr = document.querySelectorAll(this.targets);
    for (var i = 0; i < arr.length; i++) {
      const element = arr[i];
      element.addEventListener('click', (e) => {
        this.beforeOpen()
        console.log('myCode')

        this.afterOpenCallBack(e.target.dataAttr);
      })
    };
  }

  setInitiator(initName) {
    this.initiator = initName;
  }

  setTargets(targetName) {
    this.targets = targetName;
  }

  afterOpenCallBack() {
    console.log('afterOpenCallBack')
  }

  afterSelectCallback() {
    console.log('afterSelectCallback');
  }

  beforeOpen() {
    console.log('beforeOpen');
  }
}
  
var dd = new dropdown('.js-dropdown');

dd.init()

dd.afterSelectCallback = function() {
  console.log(123123123)
};