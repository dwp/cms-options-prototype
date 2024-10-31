
const express = require('express')
const router = express.Router()
const util = require('util');

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start iteration2

// do-you-have-a-court-order

/* router.post('/datagather/iteration2/do-you-have-a-court-order', function(req, res) {
  if (req.body['court-order'] === 'yes') {
    res.redirect('income-none-of-the-above');
  } else if (req.body['court-order'] === 'no'){
    res.redirect('/datagather/iteration2/where-can-we-send-letters');
  } else {
    res.redirect('do-you-have-a-court-order');
  }
   }); */
  

// contacting-you-about-your-application

router.post('/datagather/iteration2/contacting-you-about-your-application', function(req, res) {
  if (req.body['different-contact'] === 'Yes') {
    res.redirect('different-contact-formats');
  } else if (req.body['different-contact'] === 'No'){
    res.redirect('/datagather/iteration2/best-number-to-call-you-on.html');
  }
  });


 // do-you-know-your-pin-and-password

 /* router.post('/datagather/iteration2/do-you-know-your-pin-and-password', function(req, res) {
  if (req.body['know-pin'] === 'yes') {
    res.redirect('do-you-have-a-court-order.html');
  } else if (req.body['know-pin'] === 'no'){
    res.redirect('/datagather/iteration2/reset-pin-and-password');
  } else {
    res.redirect('/datagather/iteration2/do-you-know-your-pin-and-password');
  }
   }); */


  // where-do-you-live

  router.post('/datagather/iteration2/where-can-we-send-letters', function(req, res) {
    if (req.body['do-you-live-here'] === 'yes') {
      res.redirect('/datagather/iteration2/contacting-you-about-your-application.html');
    } else if (req.body['do-you-live-here'] === 'no'){
      res.redirect('/datagather/iteration2/where-do-you-live.html');
    } else {
      res.redirect('where-can-we-send-letters');
    }
     });
  

 // can-we-send-you-emails

 router.post('/datagather/iteration2/can-we-send-you-emails', function(req, res) {
  if (req.body['emails'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-your-email-address.html');
  } else if (req.body['emails'] === 'no'){
    res.redirect('/datagather/iteration2/section-two-check-your-answers.html');
  } else {
    res.redirect('can-we-send-you-emails');
  }
   });


   // will-you-answer-equality-questions

 router.post('/datagather/iteration2/will-you-answer-equality-questions', function(req, res) {
  if (req.body['equality-questions'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-your-ethnic-group.html');
  } else if (req.body['equality-questions'] === 'no'){
    res.redirect('/datagather/iteration2/do-you-agree-with-income-amount.html');
  }
  });


  // different-contact-formats checkboxes
 
   router.post('/datagather/iteration2/different-contact-formats.html', function(req, res, next){ 
 
    if (req.session.data['format']){
     for (i = 0; i<req.session.data['format'].length; i++){
     switch (req.session.data['format'][i]){
 
      case "letters" :  return res.redirect("/datagather/iteration2/different-contact-formats-letters.html"); next(); break;
      case "phone" :  return res.redirect("/datagather/iteration2/different-contact-formats-phone.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })
 
   router.post('/datagather/iteration2/different-contact-formats.html', function(req, res, next){ 
 
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

 router.post('/datagather/iteration2/what-is-your-ethnic-group', function(req, res) {
  if (req.body['ethnic-group'] === 'white') {
    res.redirect('/datagather/iteration2/ethnic-group-white.html');
  } else if (req.body['ethnic-group'] === 'mixed'){
    res.redirect('/datagather/iteration2/ethnic-group-mixed.html');
  } else if (req.body['ethnic-group'] === 'asian'){
      res.redirect('/datagather/iteration2/ethnic-group-asian.html');
    }else if (req.body['ethnic-group'] === 'black'){
      res.redirect('/datagather/iteration2/ethnic-group-black.html');
    }else if (req.body['ethnic-group'] === 'other'){
      res.redirect('/datagather/iteration2/ethnic-group-other.html');
    } else {
      res.redirect('/datagather/iteration2/what-is-your-religion.html');
    }
  });


// do-you-have-any-access-needs

 /* router.post('/datagather/iteration2/do-you-have-any-access-needs', function(req, res) {
  if (req.body['access-needs'] === 'yes') {
    res.redirect('/datagather/iteration2/select-access-needs.html');
  } else if (req.body['access-needs'] === 'no'){
    res.redirect('/datagather/iteration2/section-three-check-your-answers.html');
  } else if (req.body['access-needs'] === 'prefer-not-to-say'){
      res.redirect('/datagather/iteration2/section-three-check-your-answers.html');
    }
  }); */


  // where-does-your-income-come-from checkboxes
 
  router.post('/datagather/iteration2/where-does-your-income-come-from.html', function(req, res, next){ 
 
    if (req.session.data['income-source']){
     for (i = 0; i<req.session.data['income-source'].length; i++){
     switch (req.session.data['income-source'][i]){
 
      case "benefits" :  return res.redirect("/datagather/iteration2/what-benefits-do-you-get.html"); next(); break;
      case "employment" :  return res.redirect("/datagather/iteration2/income-employed.html"); next(); break;
      case "self-employment" :  return res.redirect("/datagather/iteration2/income-self-employed.html"); next(); break;
      case "none" :  return res.redirect("/datagather/iteration2/how-do-you-support-yourself.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })
 

  // what-benefits-do-you-get checkboxes
 
  router.post('/datagather/iteration2/what-benefits-do-you-get.html', function(req, res, next){ 
 
    if (req.session.data['benefits']){
     for (i = 0; i<req.session.data['benefits'].length; i++){
     switch (req.session.data['benefits'][i]){
 
      case "income-support" :  return res.redirect("/datagather/iteration2/what-benefits-do-you-share.html"); next(); break;
      case "jobseekers-allowance-income" :  return res.redirect("/datagather/iteration2/what-benefits-do-you-share.html"); next(); break;
      case "income-related-employment" :  return res.redirect("/datagather/iteration2/what-benefits-do-you-share.html"); next(); break;
      case "pension-credit" :  return res.redirect("/datagather/iteration2/what-benefits-do-you-share.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect("/datagather/iteration2/section-four-benefits-check-your-answers.html"); next();
   })
 



 // what-benefits-do-you-share checkboxes
 
 router.post('/datagather/iteration2/what-benefits-do-you-share.html', function(req, res, next){ 
 
  if (req.session.data['benefits-share']){
   for (i = 0; i<req.session.data['benefits-share'].length; i++){
   switch (req.session.data['benefits-share'][i]){

    case "income-support" :  return res.redirect("/datagather/iteration2/who-do-you-share-benefits-with.html"); next(); break;
    case "jobseekers-allowance-income" :  return res.redirect("/datagather/iteration2/who-do-you-share-benefits-with.html"); next(); break;
    case "income-related-employment" :  return res.redirect("/datagather/iteration2/who-do-you-share-benefits-with.html"); next(); break;
    case "pension-credit" :  return res.redirect("/datagather/iteration2/who-do-you-share-benefits-with.html"); next(); break;
    default: continue;
    }
    break;
   }
  } else {

  }
 return res.redirect("/datagather/iteration2/section-four-benefits-check-your-answers.html"); next();
 })


// do-you-know-your-income

router.post('/datagather/iteration2/do-you-know-your-income', function(req, res) {
  if (req.body['annual-income'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-your-annual-income');
  } else if (req.body['annual-income'] === 'no'){
    res.redirect('/datagather/iteration2/what-is-your-annual-income-fixed');
  } else {
    res.redirect('do-you-know-your-income');
  }
   });


// you-have-told-us-about-employer

router.post('/datagather/iteration2/you-have-told-us-about-employer', function(req, res) {
  if (req.body['add-employer'] === 'yes') {
    res.redirect('/datagather/iteration2/income-employed.html');
  } else if (req.body['add-employer'] === 'no'){
    res.redirect('/datagather/iteration2/do-you-pay-into-a-pension');
  } else {
    res.redirect('you-have-told-us-about-employer');
  }
   });


// you-have-told-us-self-employment

router.post('/datagather/iteration2/you-have-told-us-self-employment', function(req, res) {
  if (req.body['add-self-employer'] === 'yes') {
    res.redirect('/datagather/iteration2/income-self-employed.html');
  } else if (req.body['add-self-employer'] === 'no'){
    res.redirect('/datagather/iteration2/section-four-self-employed-check-your-answers.html');
  } else {
    res.redirect('you-have-told-us-self-employment');
  }
   });


// do-you-pay-into-a-pension

/* router.post('/datagather/iteration2/do-you-pay-into-a-pension', function(req, res) {
  if (req.body['pension'] === 'yes') {
    res.redirect('/datagather/iteration2/if-you-pay-into-a-private-pension');
  } else if (req.body['pension'] === 'no'){
    res.redirect('/datagather/iteration2/section-four-employed-check-your-answers');
  } else {
    res.redirect('do-you-pay-into-a-pension');
  }
   }); */


 // what-type-of-pension checkboxes
 
 router.post('/datagather/iteration2/what-type-of-pension.html', function(req, res, next){ 
 
  if (req.session.data['pension-type']){
   for (i = 0; i<req.session.data['pension-type'].length; i++){
   switch (req.session.data['pension-type'][i]){

    case "private" :  return res.redirect("/datagather/iteration2/if-you-pay-into-a-private-pension.html"); next(); break;
    case "workplace" :  return res.redirect("/datagather/iteration2/tell-us-about-your-children.html"); next(); break;
    default: continue;
    }
    break;
   }
  } else {

  }
 return res.redirect("/datagather/iteration2/tell-us-about-your-children.html"); next();
 })


// accept-parentage

router.post('/datagather/iteration2/accept-parentage', function(req, res) {
  if (req.body['parentage'] === 'yes') {
    res.redirect('/datagather/iteration2/section-five-check-your-answers-for-named-child');
  } else if (req.body['parentage'] === 'no'){
    res.redirect('/datagather/iteration2/are-you-on-the-birth-certificate');
  } else {
    res.redirect('accept-parentage');
  }
   });


// are-you-on-the-birth-certificate

router.post('/datagather/iteration2/are-you-on-the-birth-certificate', function(req, res) {
  if (req.body['birth-certificate'] === 'yes') {
    res.redirect('/datagather/iteration2/how-often-does-child-stay-overnight');
  } else if (req.body['birth-certificate'] === 'no'){
    res.redirect('/datagather/iteration2/do-you-know-applicant');
  } else {
    res.redirect('are-you-on-the-birth-certificate');
  }
   });



// section-five-check-your-answers-for-named-child

router.post('/datagather/iteration2/section-five-check-your-answers-for-named-child', function(req, res) {
  if (req.body['add-another-named-child'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-your-childs-name');
  } else if (req.body['add-another-named-child'] === 'no'){
    res.redirect('/datagather/iteration2/other-children-private-arrangement');
  } else {
    res.redirect('section-five-check-your-answers-for-named-child');
  }
   });


// section-five-check-your-answers-for-other-child

router.post('/datagather/iteration2/section-five-check-your-answers-for-other-child', function(req, res) {
  if (req.body['add-another-other-child'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-this-childs-name');
  } else if (req.body['add-another-other-child'] === 'no'){
    res.redirect('/datagather/iteration2/payment-types');
  } else {
    res.redirect('section-five-check-your-answers-for-other-child');
  }
   });


// section-five-check-your-answers-for-fba-child

router.post('/datagather/iteration2/section-five-check-your-answers-for-fba-child', function(req, res) {
  if (req.body['add-another-fba-child'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-this-childs-name-fba');
  } else if (req.body['add-another-fba-child'] === 'no'){
    res.redirect('/datagather/iteration2/do-any-other-children-live-with-you');
  } else {
    res.redirect('section-five-check-your-answers-for-fba-child');
  }
   });



// other-children-private-arrangement

router.post('/datagather/iteration2/other-children-private-arrangement', function(req, res) {
  if (req.body['other-child-private-arrangement'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-this-childs-name-fba');
  } else if (req.body['other-child-private-arrangement'] === 'no'){
    res.redirect('/datagather/iteration2/do-any-other-children-live-with-you');
  } else {
    res.redirect('section-five-check-your-answers-for-named-child');
  }
   });


   // do-any-other-children-live-with-you

router.post('/datagather/iteration2/do-any-other-children-live-with-you', function(req, res) {
  if (req.body['any-other-child'] === 'yes') {
    res.redirect('/datagather/iteration2/what-is-this-childs-name');
  } else if (req.body['any-other-child'] === 'no'){
    res.redirect('/datagather/iteration2/payment-types');
  } else {
    res.redirect('do-any-other-children-live-with-you');
  }
   });


// payment-types

   router.post('/datagather/iteration2/payment-types', function(req, res) {
    if (req.body['payment-type'] === 'direct-pay') {
      res.redirect('/datagather/iteration2/direct-pay');
    } else if (req.body['payment-type'] === 'collect-and-pay'){
      res.redirect('/datagather/iteration2/collect-and-pay');
    } else {
      res.redirect('payment-types');
    }
     });


// how-often-would-you-like-to-make-payments

router.post('/datagather/iteration2/how-often-would-you-like-to-make-payments', function(req, res) {
  if (req.body['payment-frequency'] === 'weekly') {
    res.redirect('/datagather/iteration2/what-day-of-the-week-would-you-like-to-make-payments');
  } else if (req.body['payment-frequency'] === 'monthly'){
    res.redirect('/datagather/iteration2/what-day-of-the-month-would-you-like-to-make-payments');
  } else {
    res.redirect('how-often-would-you-like-to-make-payments');
  }
   });


   // how-you-make-collect-and-pay-payments

router.post('/datagather/iteration2/how-you-make-collect-and-pay-payments', function(req, res) {
  if (req.body['collect-and-pay-type'] === 'direct-debit') {
    res.redirect('/datagather/iteration2/what-day-of-the-month-would-you-like-to-make-payments-collect-and-pay');
  } else if (req.body['collect-and-pay-type'] === 'deduction-of-earnings'){
    res.redirect('/datagather/iteration2/section-six-check-your-answers-collect-and-pay');
  } else {
    res.redirect('how-you-make-collect-and-pay-payments');
  }
   });


   // service-type-preference

   router.post('/datagather/iteration2/service-type-preference', function(req, res) {
    if (req.body['service-type'] === 'direct-pay') {
      res.redirect('/datagather/iteration2/how-often-would-you-like-to-make-payments');
    } else if (req.body['service-type'] === 'collect-and-pay'){
      res.redirect('/datagather/iteration2/how-you-make-collect-and-pay-payments');
    } else {
      res.redirect('service-type-preference');
    }
     });


   // best-number-to-call-you-on

   router.post('/datagather/iteration2/best-number-to-call-you-on', function(req, res) {
    if (req.body['your-number'] === 'yes') {
      res.redirect('/datagather/iteration2/when-can-we-call-you');
    } else if (req.body['your-number'] === 'no'){
      res.redirect('/datagather/iteration2/text-confirmation');
    } else {
      res.redirect('best-number-to-call-you-on');
    }
     });
  

   // text-confirmation

   router.post('/datagather/iteration2/text-confirmation', function(req, res) {
    if (req.body['send-texts'] === 'yes') {
      res.redirect('/datagather/iteration2/when-can-we-call-you');
    } else if (req.body['send-texts'] === 'no'){
      res.redirect('/datagather/iteration2/email-updates');
    } else {
      res.redirect('text-confirmation');
    }
     });
  


// do-you-agree-with-income-amount

router.post('/datagather/iteration2/do-you-agree-with-income-amount', function(req, res) {
  if (req.body['income-amount-agree'] === 'yes') {
    res.redirect('/datagather/iteration2/report-change-in-income');
  } else if (req.body['income-amount-agree'] === 'no'){
    res.redirect('/datagather/iteration2/where-does-your-income-come-from');
  } else {
    res.redirect('do-you-agree-with-income-amount');
  }
   });



// report-change-in-income

router.post('/datagather/iteration2/report-change-in-income', function(req, res) {
  if (req.body['income-change'] === 'yes') {
    res.redirect('/datagather/iteration2/where-does-your-income-come-from');
  } else if (req.body['income-change'] === 'no'){
    res.redirect('/datagather/iteration2/do-you-pay-into-a-pension');
  } else {
    res.redirect('/report-change-in-income');
  }
   });



// NEW 2024 PARENTAGE DISPUTE SECTION ROUTES

// do-you-know-applicant

router.post('/datagather/iteration2/do-you-know-applicant', function(req, res) {
  if (req.body['know-applicant'] === 'yes') {
    res.redirect('/datagather/iteration2/do-you-have-evidence');
  } else if (req.body['know-applicant'] === 'no'){
    res.redirect('/datagather/iteration2/caseworker-will-call');
  } else {
    res.redirect('/do-you-know-applicant');
  }
   });




// do-you-have-evidence

/* router.post('/datagather/iteration2/do-you-have-evidence', function(req, res) {
  if (req.body['evidence'] === 'yes') {
    res.redirect('/datagather/iteration2/caseworker-will-call');
  } else if (req.body['evidence'] === 'no'){
    res.redirect('/datagather/iteration2/has-first-child-been-adopted');
  } else {
    res.redirect('/do-you-have-evidence');
  }
   }); */

   /* router.post('/datagather/iteration2/do-you-have-evidence.html', function(req, res, next){ 
 
    if (req.session.data['evidence']){
     for (i = 0; i<req.session.data['evidence'].length; i++){
     switch (req.session.data['evidence'][i]){
 
      case "DNA test" :  return res.redirect("/datagather/iteration2/caseworker-will-call.html"); next(); break;
      case "Court documents" :  return res.redirect("/datagather/iteration2/caseworker-will-call.html"); next(); break;
      case "Neither" :  return res.redirect("/datagather/iteration2/has-first-child-been-adopted.html"); next(); break;
      default: continue;
      }
      break;
     }
    } else {
 
    }
   return res.redirect(""); next();
   })    */


router.post('/datagather/iteration2/do-you-have-evidence', function(req, res, next) {
    
    const evidence = req.session.data['evidence'];   

    if (evidence.includes('DNA test') || evidence.includes('Court documents')){
        res.redirect("/datagather/iteration2/caseworker-will-call.html")
    } else {
        res.redirect("/datagather/iteration2/has-first-child-been-adopted.html")
    }

    next()
})

// has-first-child-been-adopted

router.post('/datagather/iteration2/has-first-child-been-adopted', function(req, res) {
  if (req.body['legally-adopted'] === 'yes') {
    res.redirect('/datagather/iteration2/section-five-check-your-answers-for-named-child');
  } else if (req.body['legally-adopted'] === 'yes-someone'){
    res.redirect('/datagather/iteration2/caseworker-will-call');
  } else if (req.body['legally-adopted'] === 'no'){
    res.redirect('/datagather/iteration2/were-you-married-to-applicant');
  } else if (req.body['legally-adopted'] === 'do-not-know'){
    res.redirect('/datagather/iteration2/were-you-married-to-applicant');
  } else {
    res.redirect('/has-first-child-been-adopted');
  }
   });

// Routes end iteration2





// Routes end

module.exports = router;
