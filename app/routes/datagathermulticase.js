
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start



  // where-does-your-income-come-from checkboxes
 
  router.post('/datagathermulticase/iteration1/where-does-your-income-come-from.html', function(req, res, next){ 
 
    if (req.session.data['income-source']){
     for (i = 0; i<req.session.data['income-source'].length; i++){
     switch (req.session.data['income-source'][i]){
 
      case "benefits" :  return res.redirect("/datagathermulticase/iteration1/what-benefits-do-you-get.html"); next(); break;
      case "employment" :  return res.redirect("/datagathermulticase/iteration1/income-employed.html"); next(); break;
      case "self-employment" :  return res.redirect("/datagathermulticase/iteration1/income-self-employed.html"); next(); break;
      case "none" :  return res.redirect("/datagathermulticase/iteration1/income-none-of-the-above.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })
 

  // what-benefits-do-you-get checkboxes
 
  router.post('/datagathermulticase/iteration1/what-benefits-do-you-get.html', function(req, res, next){ 
 
    if (req.session.data['benefits']){
     for (i = 0; i<req.session.data['benefits'].length; i++){
     switch (req.session.data['benefits'][i]){
 
      case "income-support" :  return res.redirect("/datagathermulticase/iteration1/what-benefits-do-you-share.html"); next(); break;
      case "jobseekers-allowance-income" :  return res.redirect("/datagathermulticase/iteration1/what-benefits-do-you-share.html"); next(); break;
      case "income-related-employment" :  return res.redirect("/datagathermulticase/iteration1/what-benefits-do-you-share.html"); next(); break;
      case "pension-credit" :  return res.redirect("/datagathermulticase/iteration1/what-benefits-do-you-share.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect("/datagathermulticase/iteration1/section-four-benefits-check-your-answers.html"); next();
   })
 



 // what-benefits-do-you-share checkboxes
 
 router.post('/datagathermulticase/iteration1/what-benefits-do-you-share.html', function(req, res, next){ 
 
  if (req.session.data['benefits-share']){
   for (i = 0; i<req.session.data['benefits-share'].length; i++){
   switch (req.session.data['benefits-share'][i]){

    case "income-support" :  return res.redirect("/datagathermulticase/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    case "jobseekers-allowance-income" :  return res.redirect("/datagathermulticase/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    case "income-related-employment" :  return res.redirect("/datagathermulticase/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    case "pension-credit" :  return res.redirect("/datagathermulticase/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    default: continue;
    }
    break;
   }
  } else {

  }
 return res.redirect("/datagathermulticase/iteration1/section-four-benefits-check-your-answers.html"); next();
 })


// do-you-know-your-income

router.post('/datagathermulticase/iteration1/do-you-know-your-income', function(req, res) {
  if (req.body['annual-income'] === 'yes') {
    res.redirect('/datagathermulticase/iteration1/what-is-your-annual-income');
  } else if (req.body['annual-income'] === 'no'){
    res.redirect('/datagathermulticase/iteration1/what-is-your-annual-income-fixed');
  } else {
    res.redirect('do-you-know-your-income');
  }
   });


// you-have-told-us-about-employer

router.post('/datagathermulticase/iteration1/you-have-told-us-about-employer', function(req, res) {
  if (req.body['add-employer'] === 'yes') {
    res.redirect('/datagathermulticase/iteration1/income-employed.html');
  } else if (req.body['add-employer'] === 'no'){
    res.redirect('/datagathermulticase/iteration1/do-you-pay-into-a-pension');
  } else {
    res.redirect('you-have-told-us-about-employer');
  }
   });


// you-have-told-us-self-employment

router.post('/datagathermulticase/iteration1/you-have-told-us-self-employment', function(req, res) {
  if (req.body['add-self-employer'] === 'yes') {
    res.redirect('/datagathermulticase/iteration1/income-self-employed.html');
  } else if (req.body['add-self-employer'] === 'no'){
    res.redirect('/datagathermulticase/iteration1/section-four-self-employed-check-your-answers.html');
  } else {
    res.redirect('you-have-told-us-self-employment');
  }
   });


// do-you-pay-into-a-pension

router.post('/datagathermulticase/iteration1/do-you-pay-into-a-pension', function(req, res) {
  if (req.body['pension'] === 'yes') {
    res.redirect('/datagathermulticase/iteration1/if-you-pay-into-a-private-pension');
  } else if (req.body['pension'] === 'no'){
    res.redirect('/datagathermulticase/iteration1/section-four-employed-check-your-answers');
  } else {
    res.redirect('do-you-pay-into-a-pension');
  }
   });


 // what-type-of-pension checkboxes
 
 router.post('/datagathermulticase/iteration1/what-type-of-pension.html', function(req, res, next){ 
 
  if (req.session.data['pension-type']){
   for (i = 0; i<req.session.data['pension-type'].length; i++){
   switch (req.session.data['pension-type'][i]){

    case "private" :  return res.redirect("/datagathermulticase/iteration1/if-you-pay-into-a-private-pension.html"); next(); break;
    case "workplace" :  return res.redirect("/datagathermulticase/iteration1/tell-us-about-your-children.html"); next(); break;
    default: continue;
    }
    break;
   }
  } else {

  }
 return res.redirect("/datagathermulticase/iteration1/tell-us-about-your-children.html"); next();
 })




// income-not-on-letter

router.post('/datagathermulticase/iteration1/income-not-on-letter', function(req, res) {
  if (req.body['income-multi'] === 'yes') {
    res.redirect('/datagathermulticase/iteration1/where-does-your-income-come-from');
  } else if (req.body['income-multi'] === 'no'){
    res.redirect('/datagathermulticase/iteration1/do-you-pay-into-a-pension');
  } else {
    res.redirect('do-you-pay-into-a-pension');
  }
   });












// Routes end

module.exports = router;
