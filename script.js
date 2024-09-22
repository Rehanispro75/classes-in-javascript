class workinfo{
constructor(name,work){
 this.name=name;
 this.work=work;

}





printinfo(){           
document.write("work" + this.name);
}
}
worker1 = new workinfo("Yash", "manager");
worker2 = new workinfo("Rahul","president");
