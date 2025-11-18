const Pages = function () {
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");
    const ul = document.createElement("ul");




    const homepage = function () {

        heading.innerHTML = `Welcome to the Restaurant..`;
        image.src = "https://nht-api.nepalhikingteam.com/media/attachments/Nepali-Foods.jpg";
        paragraph.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum similique consequuntur repellat! Modi minima dignissimos ducimus
     repudiandae expedita, ratione reiciendis accusamus itaque facere deserunt repellat laudantium quidem enim maxime, adipisci dolore molestiae animi maiores 
     nemo numquam saepe sint esse sunt sequi. Impedit assumenda ipsum sint explicabo itaque quia et nobis, esse officia provident delectus labore modi minus nesciunt 
     ad dolores sunt perspiciatis sit quod porro! Voluptate officiis quos magnam! Aspernatur, quisquam inventore. Quibusdam quod asperiores molestiae enim sequi consequuntur
      quam culpa hic harum? Perspiciatis eveniet similique voluptas accusamus exercitationem.Hic numquam perferendis fuga modi autem adipisci, repellat quibusdam dolorem expedita ? `


        content.appendChild(heading);
        content.appendChild(image);
        content.appendChild(paragraph);
    }

    const menu = function () {

        heading.innerHTML = `This is the MENU`;
        content.appendChild(heading);
        content.appendChild(ul);

        for (let i = 0; i < 5; i++) {

            let li = document.createElement("li");
            let image = document.createElement("img");
            let paragraph = document.createElement("p");


            image.src = "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
            paragraph.innerHTML = " MOMO $10"

            
            ul.appendChild(li);
            li.appendChild(image);
            li.appendChild(paragraph);

        }
    }

    const aboutUs = function (){
        heading.innerHTML = `About US`;
        image.src = "https://nht-api.nepalhikingteam.com/media/attachments/Nepali-Foods.jpg";
        paragraph.innerHTML = `That is it :) Contact Us if you are intrested :) `


        content.appendChild(heading);
        content.appendChild(image);
        content.appendChild(paragraph);
    }




    return { homepage, menu , aboutUs}

}();




export { Pages };