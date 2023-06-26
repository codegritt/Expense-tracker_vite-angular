const router = require('express').Router();
const { addExpense, getExpense, deleteExpense } = require('../controllers/income');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

router.post('/add-income',(req,res)=>{
    addIncome
})

router.get('/get-incomes',(req,res)=>{
    getIncomes
})

router.delete('/delete-income/:id',(req,res)=>{
     deleteIncome
})
router.post('/add-expense',(req,res)=>{
    
    addExpense
})
router.get('/get-expenses',(req,res)=>{
     getExpense
    })
router.delete('/delete-expense/:id',(req,res)=>{
     deleteExpense
    })

module.exports = router