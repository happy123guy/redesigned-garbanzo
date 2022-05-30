var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://pbs.twimg.com/profile_images/923451113239703552/62jMMnTQ_400x400.jpg", "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6" , "https://i.postimg.cc/JnL6wtrd/sister.jpg" , "https://images.all-free-download.com/images/graphiclarge/funny_boy_icon_cartoon_character_sketch_6851667.jpg"];
var names = ["Fmaily Book","DAD", "MOM", "SISTER-6yrs", "ME-11yrs"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
