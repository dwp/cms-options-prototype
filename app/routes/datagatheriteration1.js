
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start



// do-you-have-a-court-order

router.post('/datagather/iteration1/do-you-have-a-court-order', function(req, res) {
  if (req.body['court-order'] === 'yes') {
    res.redirect('income-none-of-the-above');
  } else if (req.body['court-order'] === 'no'){
    res.redirect('/datagather/iteration1/where-can-we-send-letters');
  } else {
    res.redirect('do-you-have-a-court-order');
  }
   });
  



// contacting-you-about-your-application

router.post('/datagather/iteration1/contacting-you-about-your-application', function(req, res) {
  if (req.body['different-contact'] === 'Yes') {
    res.redirect('different-contact-formats');
  } else if (req.body['different-contact'] === 'No'){
    res.redirect('/datagather/iteration1/best-number-to-call-you-on.html');
  }
  });





 // do-you-know-your-pin-and-password

 router.post('/datagather/iteration1/do-you-know-your-pin-and-password', function(req, res) {
  if (req.body['know-pin'] === 'yes') {
    res.redirect('what-is-your-name');
  } else if (req.body['know-pin'] === 'no'){
    res.redirect('/datagather/iteration1/reset-pin-and-password');
  } else {
    res.redirect('/datagather/iteration1/do-you-know-your-pin-and-password');
  }
   });




  
  // where-do-you-live

  router.post('/datagather/iteration1/where-can-we-send-letters', function(req, res) {
    if (req.body['do-you-live-here'] === 'yes') {
      res.redirect('/datagather/iteration1/contacting-you-about-your-application.html');
    } else if (req.body['do-you-live-here'] === 'no'){
      res.redirect('/datagather/iteration1/where-do-you-live.html');
    } else {
      res.redirect('where-can-we-send-letters');
    }
     });
  


 // can-we-send-you-emails

 router.post('/datagather/iteration1/can-we-send-you-emails', function(req, res) {
  if (req.body['emails'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-your-email-address.html');
  } else if (req.body['emails'] === 'no'){
    res.redirect('/datagather/iteration1/section-two-check-your-answers.html');
  } else {
    res.redirect('can-we-send-you-emails');
  }
   });


   // will-you-answer-equality-questions

 router.post('/datagather/iteration1/will-you-answer-equality-questions', function(req, res) {
  if (req.body['equality-questions'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-your-ethnic-group.html');
  } else if (req.body['equality-questions'] === 'no'){
    res.redirect('/datagather/iteration1/where-does-your-income-come-from.html');
  }
  });



  // different-contact-formats checkboxes
 
   router.post('/datagather/iteration1/different-contact-formats.html', function(req, res, next){ 
 
    if (req.session.data['format']){
     for (i = 0; i<req.session.data['format'].length; i++){
     switch (req.session.data['format'][i]){
 
      case "letters" :  return res.redirect("/datagather/iteration1/different-contact-formats-letters.html"); next(); break;
      case "phone" :  return res.redirect("/datagather/iteration1/different-contact-formats-phone.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })
 
   router.post('/datagather/iteration1/different-contact-formats.html', function(req, res, next){ 
 
    if (req.session.data['format']){
     for (i = 0; i<req.session.data['format'].length; i++){
     switch (req.session.data['format'][i]){
 
      case "phone" :  return res.redirect(""); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })
 


 // what-is-your-ethnic-group

 router.post('/datagather/iteration1/what-is-your-ethnic-group', function(req, res) {
  if (req.body['ethnic-group'] === 'white') {
    res.redirect('/datagather/iteration1/ethnic-group-white.html');
  } else if (req.body['ethnic-group'] === 'mixed'){
    res.redirect('/datagather/iteration1/ethnic-group-mixed.html');
  } else if (req.body['ethnic-group'] === 'asian'){
      res.redirect('/datagather/iteration1/ethnic-group-asian.html');
    }else if (req.body['ethnic-group'] === 'black'){
      res.redirect('/datagather/iteration1/ethnic-group-black.html');
    }else if (req.body['ethnic-group'] === 'other'){
      res.redirect('/datagather/iteration1/ethnic-group-other.html');
    } else {
      res.redirect('/datagather/iteration1/what-is-your-religion.html');
    }
  });


// do-you-have-any-access-needs

router.post('/datagather/iteration1/do-you-have-any-access-needs', function(req, res) {
  if (req.body['access-needs'] === 'yes') {
    res.redirect('/datagather/iteration1/select-access-needs.html');
  } else if (req.body['access-needs'] === 'no'){
    res.redirect('/datagather/iteration1/section-three-check-your-answers.html');
  } else if (req.body['access-needs'] === 'prefer-not'){
      res.redirect('/datagather/iteration1/section-three-check-your-answers.html');
    }
  });




  // where-does-your-income-come-from checkboxes
 
  router.post('/datagather/iteration1/where-does-your-income-come-from.html', function(req, res, next){ 
 
    if (req.session.data['income-source']){
     for (i = 0; i<req.session.data['income-source'].length; i++){
     switch (req.session.data['income-source'][i]){
 
      case "benefits" :  return res.redirect("/datagather/iteration1/what-benefits-do-you-get.html"); next(); break;
      case "employment" :  return res.redirect("/datagather/iteration1/income-employed.html"); next(); break;
      case "self-employment" :  return res.redirect("/datagather/iteration1/income-self-employed.html"); next(); break;
      case "none" :  return res.redirect("/datagather/iteration1/income-none-of-the-above.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })
 


  // what-benefits-do-you-get checkboxes
 
  router.post('/datagather/iteration1/what-benefits-do-you-get.html', function(req, res, next){ 
 
    if (req.session.data['benefits']){
     for (i = 0; i<req.session.data['benefits'].length; i++){
     switch (req.session.data['benefits'][i]){
 
      case "income-support" :  return res.redirect("/datagather/iteration1/what-benefits-do-you-share.html"); next(); break;
      case "jobseekers-allowance-income" :  return res.redirect("/datagather/iteration1/what-benefits-do-you-share.html"); next(); break;
      case "income-related-employment" :  return res.redirect("/datagather/iteration1/what-benefits-do-you-share.html"); next(); break;
      case "pension-credit" :  return res.redirect("/datagather/iteration1/what-benefits-do-you-share.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect("/datagather/iteration1/section-four-benefits-check-your-answers.html"); next();
   })
 



 // what-benefits-do-you-share checkboxes
 
 router.post('/datagather/iteration1/what-benefits-do-you-share.html', function(req, res, next){ 
 
  if (req.session.data['benefits-share']){
   for (i = 0; i<req.session.data['benefits-share'].length; i++){
   switch (req.session.data['benefits-share'][i]){

    case "income-support" :  return res.redirect("/datagather/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    case "jobseekers-allowance-income" :  return res.redirect("/datagather/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    case "income-related-employment" :  return res.redirect("/datagather/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    case "pension-credit" :  return res.redirect("/datagather/iteration1/who-do-you-share-benefits-with.html"); next(); break;
    default: continue;
    }
    break;
   }
  } else {

  }
 return res.redirect("/datagather/iteration1/section-four-benefits-check-your-answers.html"); next();
 })


// do-you-know-your-income

router.post('/datagather/iteration1/do-you-know-your-income', function(req, res) {
  if (req.body['annual-income'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-your-annual-income');
  } else if (req.body['annual-income'] === 'no'){
    res.redirect('/datagather/iteration1/what-is-your-annual-income-fixed');
  } else {
    res.redirect('do-you-know-your-income');
  }
   });


// you-have-told-us-about-employer

router.post('/datagather/iteration1/you-have-told-us-about-employer', function(req, res) {
  if (req.body['add-employer'] === 'yes') {
    res.redirect('/datagather/iteration1/income-employed.html');
  } else if (req.body['add-employer'] === 'no'){
    res.redirect('/datagather/iteration1/section-four-employed-check-your-answers.html');
  } else {
    res.redirect('you-have-told-us-about-employer');
  }
   });



// you-have-told-us-self-employment

router.post('/datagather/iteration1/you-have-told-us-self-employment', function(req, res) {
  if (req.body['add-self-employer'] === 'yes') {
    res.redirect('/datagather/iteration1/income-self-employed.html');
  } else if (req.body['add-self-employer'] === 'no'){
    res.redirect('/datagather/iteration1/section-four-self-employed-check-your-answers.html');
  } else {
    res.redirect('you-have-told-us-self-employment');
  }
   });


// do-you-pay-into-a-pension

router.post('/datagather/iteration1/do-you-pay-into-a-pension', function(req, res) {
  if (req.body['pension'] === 'yes') {
    res.redirect('/datagather/iteration1/what-type-of-pension.html');
  } else if (req.body['pension'] === 'no'){
    res.redirect('/datagather/iteration1/tell-us-about-your-children.html');
  } else {
    res.redirect('do-you-pay-into-a-pension');
  }
   });


 // what-type-of-pension checkboxes
 
 router.post('/datagather/iteration1/what-type-of-pension.html', function(req, res, next){ 
 
  if (req.session.data['pension-type']){
   for (i = 0; i<req.session.data['pension-type'].length; i++){
   switch (req.session.data['pension-type'][i]){

    case "private" :  return res.redirect("/datagather/iteration1/if-you-pay-into-a-private-pension.html"); next(); break;
    case "workplace" :  return res.redirect("/datagather/iteration1/tell-us-about-your-children.html"); next(); break;
    default: continue;
    }
    break;
   }
  } else {

  }
 return res.redirect("/datagather/iteration1/tell-us-about-your-children.html"); next();
 })


// accept-parentage

router.post('/datagather/iteration1/accept-parentage', function(req, res) {
  if (req.body['parentage'] === 'yes') {
    res.redirect('/datagather/iteration1/how-often-does-child-stay-overnight');
  } else if (req.body['parentage'] === 'no'){
    res.redirect('/datagather/iteration1/are-you-on-the-birth-certificate');
  } else {
    res.redirect('accept-parentage');
  }
   });


// are-you-on-the-birth-certificate

router.post('/datagather/iteration1/are-you-on-the-birth-certificate', function(req, res) {
  if (req.body['birth-certificate'] === 'yes') {
    res.redirect('/datagather/iteration1/how-often-does-child-stay-overnight');
  } else if (req.body['birth-certificate'] === 'no'){
    res.redirect('/datagather/iteration1/income-none-of-the-above');
  } else {
    res.redirect('are-you-on-the-birth-certificate');
  }
   });



// section-five-check-your-answers-for-named-child

router.post('/datagather/iteration1/section-five-check-your-answers-for-named-child', function(req, res) {
  if (req.body['add-another-named-child'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-your-childs-name');
  } else if (req.body['add-another-named-child'] === 'no'){
    res.redirect('/datagather/iteration1/other-children-private-arrangement');
  } else {
    res.redirect('section-five-check-your-answers-for-named-child');
  }
   });


  // section-five-check-your-answers-for-other-child

router.post('/datagather/iteration1/section-five-check-your-answers-for-other-child', function(req, res) {
  if (req.body['add-another-other-child'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-this-childs-name');
  } else if (req.body['add-another-other-child'] === 'no'){
    res.redirect('/datagather/iteration1/payment-types');
  } else {
    res.redirect('section-five-check-your-answers-for-other-child');
  }
   });


// section-five-check-your-answers-for-fba-child

router.post('/datagather/iteration1/section-five-check-your-answers-for-fba-child', function(req, res) {
  if (req.body['add-another-fba-child'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-this-childs-name-fba');
  } else if (req.body['add-another-fba-child'] === 'no'){
    res.redirect('/datagather/iteration1/do-any-other-children-live-with-you');
  } else {
    res.redirect('section-five-check-your-answers-for-fba-child');
  }
   });



// other-children-private-arrangement

router.post('/datagather/iteration1/other-children-private-arrangement', function(req, res) {
  if (req.body['other-child-private-arrangement'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-this-childs-name-fba');
  } else if (req.body['other-child-private-arrangement'] === 'no'){
    res.redirect('/datagather/iteration1/do-any-other-children-live-with-you');
  } else {
    res.redirect('section-five-check-your-answers-for-named-child');
  }
   });


   // do-any-other-children-live-with-you

router.post('/datagather/iteration1/do-any-other-children-live-with-you', function(req, res) {
  if (req.body['any-other-child'] === 'yes') {
    res.redirect('/datagather/iteration1/what-is-this-childs-name');
  } else if (req.body['any-other-child'] === 'no'){
    res.redirect('/datagather/iteration1/payment-types');
  } else {
    res.redirect('do-any-other-children-live-with-you');
  }
   });


   // payment-types

   router.post('/datagather/iteration1/payment-types', function(req, res) {
    if (req.body['payment-type'] === 'direct-pay') {
      res.redirect('/datagather/iteration1/direct-pay');
    } else if (req.body['payment-type'] === 'collect-and-pay'){
      res.redirect('/datagather/iteration1/collect-and-pay');
    } else {
      res.redirect('payment-types');
    }
     });


// how-often-would-you-like-to-make-payments

router.post('/datagather/iteration1/how-often-would-you-like-to-make-payments', function(req, res) {
  if (req.body['payment-frequency'] === 'weekly') {
    res.redirect('/datagather/iteration1/what-day-of-the-week-would-you-like-to-make-payments');
  } else if (req.body['payment-frequency'] === 'monthly'){
    res.redirect('/datagather/iteration1/what-day-of-the-month-would-you-like-to-make-payments');
  } else {
    res.redirect('how-often-would-you-like-to-make-payments');
  }
   });


   // how-you-make-collect-and-pay-payments

router.post('/datagather/iteration1/how-you-make-collect-and-pay-payments', function(req, res) {
  if (req.body['collect-and-pay-type'] === 'direct-debit') {
    res.redirect('/datagather/iteration1/what-day-of-the-month-would-you-like-to-make-payments-collect-and-pay');
  } else if (req.body['collect-and-pay-type'] === 'deduction-of-earnings'){
    res.redirect('/datagather/iteration1/section-six-check-your-answers-collect-and-pay');
  } else {
    res.redirect('how-you-make-collect-and-pay-payments');
  }
   });


   // service-type-preference

   router.post('/datagather/iteration1/service-type-preference', function(req, res) {
    if (req.body['service-type'] === 'direct-pay') {
      res.redirect('/datagather/iteration1/how-often-would-you-like-to-make-payments');
    } else if (req.body['service-type'] === 'collect-and-pay'){
      res.redirect('/datagather/iteration1/how-you-make-collect-and-pay-payments');
    } else {
      res.redirect('service-type-preference');
    }
     });
  





// Routes end

module.exports = router;
