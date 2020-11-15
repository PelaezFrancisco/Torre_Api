function buscar(){
  console.log("yoooooooS")
  let user = document.getElementById("barra").value;
    $( document ).ready(function() {
        console.log("holaaaaa");

        //Username: pelaezfrancisco2
        // APi: https://torre.bio/api/bios/$username
        let endpoint = 'https://bio.torre.co/api/bios/';
        //let user = 'pelaezfrancisco2';
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
                  //console.log(resul);
                  post(resul);
              },
              error: function(e) {

                console.log(e);
             }
          });
        });
}

//Postea el json y recibe la pagina
function post(resul){
    /*
    */
    console.log(resul);

   
        var content = document.getElementById("content");//content

        /*
        *PESONAL INFO
        */
        var seccion = document.getElementById("topcolumn");
        seccion.innerHTML = "";
        

        //Imagen
        var pimg = document.createElement("IMG");
        pimg.className = "topimg";
        pimg.width = 300;
        pimg.height = 300;
        var m = resul.person.picture
        if(m == null){m="https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"} //Si imagen es nula
        pimg.src = m;
        seccion.appendChild(pimg);


        var seccion2 = document.createElement("DIV");
        seccion2.className = "topbody";
        seccion.appendChild(seccion2);
        //Nombre
        var nombre = document.createElement("H4");
        nombre.className = "card-title";
        var n = resul.person.name;
        nombre.innerHTML = "Name: "+n;
        seccion2.appendChild(nombre);

        //Titulo
        var titulo = document.createElement("P");
        titulo.className = "titulo";
        var t = resul.person.professionalHeadline;
        titulo.innerHTML = "Title: "+t;
        seccion2.appendChild(titulo);

        //ID
        var id = document.createElement("P");
        id.className = "id";
        var i = resul.person.publicId;
        id.innerHTML = "Public Id: "+i;
        seccion2.appendChild(id);

        //Sumary
        var sum = document.createElement("P");
        sum.className = "sum";
        var s = resul.person.summaryOfBio;
        sum.innerHTML = "Summary: "+s;
        seccion2.appendChild(sum);
       
        //Verification
        var vimg = document.createElement("IMG");
        vimg.className = "verimg";
        vimg.width = 50;
        vimg.height = 50;
        var m = resul.person.verified

        if(m == true){
          vimg.src = "img/verified2.png";
          seccion2.appendChild(vimg);
        }

        //External Links
        
        var cuentas = document.createElement("H2");
        cuentas.innerHTML = "Personal Accounts:";
       
        var ttt = document.getElementById("t");//content
        var cuentas = document.createElement("H2");
        cuentas.innerHTML = "Personal Accounts:";
        ttt.appendChild(cuentas);
        for (let i = 0; i< resul.person.links.length; i++) {

          var url = resul.person.links[i];
           /*
          *EXTERNAL LINKS
          */ 
          //Get container div
          var content2 = document.getElementById("row text-center");//content
         
          //col-lg-3 col-md-6 mb-4
          var div2 = document.createElement("DIV");
          div2.className = "col-lg-3 col-md-6 mb-4";
          content2.appendChild(div2);
          //card h-100
          var div3 = document.createElement("DIV");
          div3.className = "card h-100";
          div2.appendChild(div3);

          //IMg
          var linkimg = document.createElement("IMG");
          linkimg.className = "card-img-top";
          linkimg.width = 100;
          linkimg.height = 100;
          //linkimg.src = url.address;
          var imgname = url.name;
          //linkedin
          try {
            linkimg.src = "img/"+imgname+".png";
            div3.appendChild(linkimg);
          } catch (error) {
            pimg.src = "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
            div3.appendChild(linkimg);
          }
          //card-body
          var div4 = document.createElement("DIV");
          div4.className = "card-body";
          div3.appendChild(div4);

          //Title
          var linktitle = document.createElement("H4");
          linktitle.className = "card-title";
          linktitle.innerHTML = url.name.toUpperCase();
          div4.appendChild(linktitle);

          //card-footer
          var div5 = document.createElement("DIV");
          div5.className = "card-footer";
          div3.appendChild(div5);

          //Button
          var linkbutton = document.createElement("A");
          linkbutton.className = "btn btn-primary";
          var u = url.address;
          linkbutton.src = u;
          linkbutton.innerHTML = "Go to Page";
          div5.appendChild(linkbutton);
        }

        //MAP
        /*
        var myOptions = {
          zoom: 8,
          center: new google.maps.LatLng(resul.person.location.latitude, resul.person.location.longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        */
        /*
        //URL
        var plink = document.createElement("A");
        plink.href=resul.articles[i].url
        seccion.appendChild(plink);

        //TITULO
        var ptitulo = document.createElement("H2");
        ptitulo.className = "post-title";
        var t = resul.articles[i].title;
        if(t.length>50){t=t.substring(0,100)+"...";}//Recortar el titulo
        ptitulo.innerHTML = t;
        plink.appendChild(ptitulo);

        //DESCRIPCION
        var pdesc = document.createElement("H3");
        pdesc.className="post-subtitle";
        var d = resul.articles[i].description;
        if(d.length>100){t=t.substring(0,80)+"...";}//Recortar el titulo
        pdesc.innerHTML=d;
        plink.appendChild(pdesc);

        //IMAGEN
        var pimg = document.createElement("IMG");
        pimg.className = "post-image";
        pimg.width = 500;
        pimg.height = 300;
        var m = resul.articles[i].urlToImage;
        if(m == null){m="https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"} //Si imagen es nula
        pimg.src = m;
        seccion.appendChild(pimg);

        //AUTHOR Y FECHA
        var a = resul.articles[i].author;
        var f = resul.articles[i].publishedAt;
        if (a == null) {a="N/A"} //Si author es nulo
        if (f == null) {a="N/A"} //Si fecha es nulo
        var paut = document.createElement("P");
        paut.className="post-meta";
        paut.innerHTML = "Author(s): "+a+" Date: "+f;
        seccion.appendChild(paut);
        //HR
        seccion.appendChild(document.createElement("HR"));
        */
    

}