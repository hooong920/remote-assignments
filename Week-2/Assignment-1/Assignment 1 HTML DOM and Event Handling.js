function handle_click(element)
{
    element.innerHTML = "<h1>Have a Good Time!</h1>";

}


function display(id) 
{
    var e = document.getElementById(id);
    if (e.style.display == 'block' || e.style.display=='')
    {
        e.style.display = 'none';
    }
    else 
    {
        e.style.display = 'block';
    }
}
