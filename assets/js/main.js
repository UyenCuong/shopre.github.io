
// let register = document.getElementById("auth-form__container");
// let isAuthent = false;
// function authentication(){
//     var username= document.getElementById("username").value;
//     var password= document.getElementById("password").value;
//     var Confirmpassword= document.getElementById("Confirmpassword").value;
//     if(username ===""||password ===""||Confirmpassword===""){
//         isAuthent =true;
//         alert("Vui lòng đăng nhập Email và xác nhận mật khẩu của bạn để hoàn tất đăng ký.")
//     }else{
//         document.getElementById("auth-form__container").style.display = "none";
//     }
//     console.log(username,password)
// }

// let isShowLoginForm = false;
// /* const modal = document.getElementById('.modal') */
// function showRes(){
//     isShowLoginForm = !isShowLoginForm;
//     if(isShowLoginForm){
//         document.getElementById("modal").style.display = "flex";
//         document.getElementById("modallogin").style.display = "none";
//     } else {
//         document.getElementById("modal").style.display = "none";
//     }
   
// }
// /** Login */
// let login = document.getElementById("form-login");
// let isLogin = false;
// function loginauthentication(){
//     var usernamelogin= document.getElementById("usernamelogin").value;
//     var passwordlogin= document.getElementById("passwordlogin").value;

//     if(usernamelogin =="admin"&&passwordlogin =="admin"){
//         isLogin = true;
//         document.getElementById("form-login").style.display = "none";
      
//     } else if(usernamelogin ===""||passwordlogin ===""){
//         alert("Vui lòng nhập tài khoản mật khẩu")        
//     } else{
//         alert("Sai tài khoản hoặc mật khẩu.") 
    
   
//     }
//     console.log(usernamelogin,passwordlogin)
// }

// let isShowLogin = false;
// function ShowFormLogin(){
//     isShowLogin = !isShowLogin;
//     if(isShowLogin){
//         document.getElementById("modallogin").style.display = "flex";
//         document.getElementById("modal").style.display = "none";
//     } else{
//         document.getElementById("modallogin").style.display = "none";
//     }
   
// }
////////////////////////////////////////////////////////

        var clickdk = document.querySelector('.js-dk')
        var modaldk = document.querySelector('.js-login')
        var container = document.querySelector('.js-container')
        var containerdn = document.querySelector('.js-containerdn')
        var clickdn = document.querySelector('.js-dn')
        var modaldn = document.querySelector('.js-dangnhap')
        var switchdn = document.querySelector('.js-switchdn')
        var switchdk = document.querySelector('.js-switchdk')
        var account = document.querySelector('.js-account')
        
        function OpenAccount(){
            account.classList.add('openlogin');
        }
        function CloseAccount(){
            account.classList.remove('openlogin');
        }
        function MO() {
            modaldk.classList.add('openlogin');
        }
        function thoat() {
            modaldk.classList.remove('openlogin');
        }
        function MOdn() {
            modaldn.classList.add('openlogin')

        }
        function thoatdn() {
            modaldn.classList.remove('openlogin');
        }
        function hamchuyendn() {
            modaldk.classList.remove('openlogin');
            modaldn.classList.add('openlogin');

        }
        function hamchuyendk() {
            modaldn.classList.remove('openlogin');
            modaldk.classList.add('openlogin');
        }
        // mở tài khoản
        account.addEventListener('click',hamchuyendk)
        modaldk.addEventListener('click',CloseAccount)
        // mở đăng ký
        clickdk.addEventListener('click',hamchuyendk)
        modaldk.addEventListener('click',thoat)
         // mở đang nhập
         clickdn.addEventListener('click',hamchuyendn)
         modaldn.addEventListener('click',thoatdn)
        //  chuyển sang đang nhập và đăng ký
        switchdn.addEventListener('click',hamchuyendn)
        switchdk.addEventListener('click',hamchuyendk)
        container.addEventListener('click',function(envent){
            envent.stopPropagation()
        })
        containerdn.addEventListener('click',function(envent){
            envent.stopPropagation()
        })
