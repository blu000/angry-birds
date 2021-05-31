class sling {
  constructor(bodyA,bodyB){
    var options= {bodyA:bodyA.body,bodyB:bodyB.body,length:20,stiffness:0.05}
    this.rope= Constraint.create (options)
    World.add(world,this.rope)
  }
  display(){
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
  }
}
