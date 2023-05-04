let data = [];

    function save(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let obj = {
            userid : Math.floor(Math.random() * 10000),
            username : name,
            useremail : email,
            userpassword : password
        }
        if(localStorage.getItem('crud')=== null || localStorage.getItem('crud') === undefined){
                data.push(obj);
            localStorage.setItem('crud',JSON.stringify(data));
        }else{
            let val = JSON.parse(localStorage.getItem('crud'));
            val.push(obj);
            localStorage.setItem('crud',JSON.stringify(val));
        }
        alert("Record successfully insert");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
       viewdata();
    }
    const viewdata = () =>
    {
        document.getElementById('edit').style.display = "none";
        let val = JSON.parse(localStorage.getItem('crud'));   
        let tbl = "";
        // for(let i in val)
        // {
        //     tbl += `
        //                 <tr>
        //                     <td>${val[i].userid}</td>
        //                     <td>${val[i].username}</td>
        //                     <td>${val[i].useremail}</td>
        //                     <td>${val[i].userpassword}</td>
        //                     <td>
        //                         <button onclick='deleteData(${val[i].userid})'>Delete</button>
        //                         <button onclick='editData(${val[i].userid})'>Edit</button>
        //                     </td>
        //                 </tr>
        //             `
        // }
        // document.getElementById('record').innerHTML = tbl;
    }
    viewdata();
    function deleteData(userid){
        let val = JSON.parse(localStorage.getItem('crud'));
        
        for(let i in val){
            if(val[i].userid == userid)
            {
                val.splice(i,1);
            }
            localStorage.setItem('crud',JSON.stringify(val));
        }
        alert("record successfully delete");
       viewdata();
    }
    function editData(userid){
        document.getElementById('edit').style.display = "block";
       document.getElementById('save').style.display = "none";
       let val = JSON.parse(localStorage.getItem('crud'));
      
       for(let i in val){
            if(val[i].userid == userid){
                document.getElementById('userid').value = val[i].userid;
                document.getElementById('name').value = val[i].username;
                document.getElementById('email').value = val[i].useremail;
                document.getElementById('password').value = val[i].userpassword;
            }
       }
    }
    function edit(){
        let id = document.getElementById('userid').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let val = JSON.parse(localStorage.getItem('crud'));
        for(let i in val){
            if(val[i].userid == id){
                val[i].username  = name;
                val[i].useremail  = email;
                val[i].userpassword  = password;
            }
            localStorage.setItem('crud',JSON.stringify(val));
        }
        alert("Reocrd successfully update");
        document.getElementById('userid').value = "";
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('save').style.display = "block";
        document.getElementById('edit').style.display = "none";
        viewdata();
    }