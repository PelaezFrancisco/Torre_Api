function buscar(){
  console.log("yoooooooS")
    $( document ).ready(function() {
        console.log("holaaaaa");

        //Username: pelaezfrancisco2
        // APi: https://torre.bio/api/bios/$username
        let endpoint = 'https://bio.torre.co/api/bios/';
        let user = 'pelaezfrancisco2';
        var final = endpoint + user;
        //console.log("Endpoint="+endpoint);
        console.log(final);
        $.ajax({
              url: final,
              type: 'GET',
              dataType:"json",
              success: function(status){
                  //console.log(status);
                  resul=status;
                  console.log(resul);
              },
              error: function(e) {
                console.log(e);
             }
          });
        });
}