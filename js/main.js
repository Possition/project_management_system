// JavaScript Document
var user1 =document.getElementById('user');
var pass1 =document.getElementById('pass');

if(user1==null){
	user1.value='请输入用户名';
}

if(pass1==null){
	pass1.type='text';
	pass1.value='请输入密码';
}




   function display(id){  
	   var traget=document.getElementById(id);
		if(traget.style.display=="none"){  
			traget.style.display="block";  
		}else{  
			traget.style.display="none";  
		}  
   }
	   
	   
	   
   function jump(id1,id2,id3){

			var traget1 =document.getElementById(id1);
			var traget2 =document.getElementById(id2);
			var traget3 =document.getElementById(id3);
			
			var traget4 =document.getElementById('span1');
			var traget5 =document.getElementById('span2');
			var traget6 =document.getElementById('span3');
			var traget7 =document.getElementById('span4');
			
			

			 if(id1=="inner_desk"){  
				traget1.style.display="block";
				traget2.style.display="none";
				traget3.style.display="none";
				
				traget4.style.background="#27967e";
				traget5.style.background="#1FBC99";
				traget6.style.background="#1FBC99";
				traget7.style.background="#1FBC99";
	
			 }else if(id1=="inner_user_client"){
				traget1.style.display="block";
				traget2.style.display="none";
				traget3.style.display="none";
				
				traget4.style.background="#1FBC99";
				traget5.style.background="#27967e";
				traget6.style.background="#1FBC99";
				traget7.style.background="#1FBC99";

			 }else if(id1=="inner_manage"){
				traget1.style.display="block";
				traget2.style.display="none";
				traget3.style.display="none";
				
				traget4.style.background="#1FBC99";
				traget5.style.background="#1FBC99";
				traget6.style.background="#27967e";
				traget7.style.background="#1FBC99";
					
			 }else if(id1=="logout"){

				traget4.style.background="#1FBC99";
				traget5.style.background="#1FBC99";
				traget6.style.background="#1FBC99";
				traget7.style.background="#27967e";
			 }
	   }

	   function jump2(id1){
		   var traget1 =document.getElementById(id1);
		   var traget2 =document.getElementById('info_user');
		   var traget3 =document.getElementById('info_role');
		   var traget4 =document.getElementById('info_client');
		   
		   
		   var traget5 =document.getElementById('span5');
		   var traget6 =document.getElementById('span6');
		   
		    if(id1=="info_user"){  
				traget1.style.display="block";
				traget3.style.display="block";
				traget4.style.display="none";

				traget5.style.background="#fe5a3f";
				traget6.style.background="#ff973a";
				
				traget6.style.height="31px";
				traget6.style.lineHeight="33px";
				
				traget5.style.height="33px";
				traget5.style.lineHeight="40px";
			 }else if(id1=="info_client"){
				traget1.style.display="block";
				traget2.style.display="none";
				traget3.style.display="none";
				
				traget5.style.background="#ff973a";
				traget6.style.background="#fe5a3f";
				
				traget5.style.height="31px";
				traget5.style.lineHeight="33px";
				
				traget6.style.height="33px";
				traget6.style.lineHeight="40px";
			 }
	   }
	   
	   function jump3(id1){
		   var traget1 =document.getElementById(id1);
		   var traget2 =document.getElementById('info_project2');
		   var traget3 =document.getElementById('info_mileage');
		   var traget4 =document.getElementById('info_taskLinked2');
		   
		   
		   var traget5 =document.getElementById('span7');
		   var traget6 =document.getElementById('span8');
		   var traget7 =document.getElementById('span9');
		   
		    if(id1=='info_project2'){  
				traget1.style.display="block";
				traget3.style.display="none";
				traget4.style.display="none";

				traget5.style.background="#fe5a3f";
				traget6.style.background="#ff973a";
				traget7.style.background="#ff973a";
				
				traget6.style.height="31px";
				traget6.style.lineHeight="33px";
				traget7.style.height="31px";
				traget7.style.lineHeight="33px";
				
				traget5.style.height="33px";
				traget5.style.lineHeight="40px";
			 }else if(id1=='info_mileage'){
				traget1.style.display="block";
				traget2.style.display="none";
				traget4.style.display="none";
				
				traget5.style.background="#ff973a";
				traget6.style.background="#fe5a3f";
				traget7.style.background="#ff973a";
				
				traget5.style.height="31px";
				traget5.style.lineHeight="33px";
				traget7.style.height="31px";
				traget7.style.lineHeight="33px";
				
				traget6.style.height="33px";
				traget6.style.lineHeight="40px";
			 }else if(id1='info_taskLinked2'){
				traget1.style.display="block";
				traget2.style.display="none";
				traget3.style.display="none";
				
				traget5.style.background="#ff973a";
				traget6.style.background="#ff973a";
				traget7.style.background="#fe5a3f";
				
				traget5.style.height="31px";
				traget5.style.lineHeight="33px";
				traget6.style.height="31px";
				traget6.style.lineHeight="33px";
				
				traget7.style.height="33px";
				traget7.style.lineHeight="40px";
				 
			 }
			 
	   }
	   
	   
	   
	   function onfocus1(id1){
		   var traget1 =document.getElementById(id1);
		   
		   if (traget1.value =='请输入用户名'){
			   traget1.value =''
				   
				
			   /* //js怎么调用控制器
				location.assign("checkAction?id="+'check1');   */
		   }
		      
		   
	   }
	   function onblur1(id1){
		   var traget1 =document.getElementById(id1);
		   var target2 = document.getElementById('check1');
		   if (traget1.value ==''){
			   traget1.value='请输入用户名'
		   }
		   
	   }
	   
	   
	   
	   function onfocus2(id1){
		   var traget1 =document.getElementById(id1);
		   var target2 = document.getElementById('check2');
		   if(traget1.value == '请输入密码') {
			   traget1.value = '';
			   traget1.type = 'password';
		   }
		   
	   }
	   function onblur2(id1){
		   var traget1 =document.getElementById(id1);
		   var target2 = document.getElementById('check2');
		   if (!traget1.value) {
			   traget1.type = 'text';
			   traget1.value = '请输入密码';
		   }
		   
	   }
	   
	   
	   
	   /*
	   
	   
	   function jump_desk(){
		   		"inner_desk".style.display="block";
		   		"inner_user_client".style.display="none";
				"inner_manage".style.display="none";
	   }
	   
	   function jump_user_client(){
		   		"inner_desk".style.display="none";
		   		"inner_user_client".style.display="block";
				"inner_manage".style.display="none";
	   }
	   
	   function jump_manage(){
		   		"inner_desk".style.display="none";
		   		"inner_user_client".style.display="none";
				"inner_manage".style.display="block";
	   }*/
	   
	   
	/*   
	   
	   function del(){  
               if(confirm("确定删除该记录？")){  
                   parent.window.location="执行删除.jsp";  
                  return true;  
               }  
               return false;  
            }  */