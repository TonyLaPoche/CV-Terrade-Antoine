const app = {
    init:function(){
        console.log('init ok');
        timer.init();
    }
}
document.addEventListener('DOMContentLoaded', app.init);