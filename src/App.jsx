import React from 'react'


function App(){
const data =[
  {
    plan: "free",
    price: 0,
    user: "single suer",
    storage : "5GB storage",
    publicproject:"unlimited public project",
    community : "community Access",
    private : "unlimited private projects",
    support :"Dedicated phone support",
    subdomain: "free subadomain",
    reports: "Monthly status Reports"
  },
  
  {
    plan: "plus",
    price: 9,
    user: "5 suer",
    storage : "5GB storage",
    publicproject:"unlimited public project",
    community : "community Access",
    private : "unlimited private projects",
    support :"Dedicated phone support",
    subdomain: "free subadomain",
   reports: "Monthly status Reports"
  },
  
{
  
    plan: "pro",
    price: 49,
    user: "unlimited suer",
    storage : "5GB storage",
    publicproject:"unlimited public project",
    community : "community Access",
    private : "unlimited private projects",
    support :"Dedicated phone support",
    subdomain: "free subadomain",
    reports : "Monthly status Reports"

  }
]


  return <>
<section class="pricing py-5">
  <div class="container">
    <div class="row">
{
 data.map((e)=>{
  return <div class="col-lg-4">

<div class="card mb-5 mb-lg-0">
  <div class="card-body">
    <h5 class="card-title text-muted text-uppercase text-center">{e.plan}</h5>
    <h6 class="card-price text-center">${e.price}<span class="period">/month</span></h6>
    <hr/>
    <ul class="fa-ul">
      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.user}</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.storage}</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.publicproject}</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.Community} </li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{e.Private}</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{e.support}</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span> {e.Subdomain}
      </li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>
       {e.reports}</li>
    </ul>
    <div class="d-grid">
      <a href="#" class="btn btn-primary text-uppercase">Button</a>
    </div>
  </div>
</div>
</div>


 })
}
     
    </div>
  </div>
</section>
  
  </>


}
export default App
