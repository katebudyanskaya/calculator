	function outputResult(val){
	  document.getElementById('display').value = val;
	}
	
    function formInput (val, del) {
     if (del) {
        document.getElementById('display').value = val;
     } else {
      document.getElementById('display').value += val;
     }
    }

    function delValue (){
      var tmp = document.getElementById("display").value;
      tmp = tmp.slice(0,-1);
      formInput(tmp, 1); 
    }

    function clearForm(){
      formInput ("",1);
    }
	
	function errorInput(){
	  try{
	    outputResult(eval(document.getElementById("display").value));
	  }
	  catch (errorInput){
	    formInput('Error');
    }
	}