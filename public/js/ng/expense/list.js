import { angular } from 'angular/core'
(function()
{
    angular.module('ExpenseModule',['api.expenses'])
        .controller("ExpenseListController",function($scope,expenseApi) {

            $scope.refreshExpenseList = function()
            {
                expenseApi.getList().then(function(data)
                {
                    $scope.expenses = data;

                    var notPaid = 0;
                    var paid = 0;
                    var total = 0;
                    _.forEach($scope.expenses, function(expense)
                    {
                        if(expense.isPaid && expense.isPaid > 0)
                        {
                            paid += Number(expense.amount);
                        }
                        else
                        {
                            notPaid += Number(expense.amount);
                        }

                        total += Number(expense.amount);
                    });

                    $scope.expenseStat = {
                        notPaidExpenses :notPaid,
                        paidExpenses : paid,
                        totalExpense : total
                    };
                });
            };

            $scope.initializeExpenseListAttributes = function()
            {
                $scope.title="Hello from Angular Controller";
                $scope.expenses = [];

                $scope.refreshExpenseList();

                $scope.expense = {};
                $scope.expenseStat = {
                    notPaidExpenses : "",
                    paidExpenses : "",
                    totalExpense : ""
                };

                $scope.isOnEditMode = false;
            };

            $scope.initializeExpenseListAttributes();

            $scope.saveExpense = function()
            {
                if(!$scope.isOnEditMode)
                {
                    expenseApi.post($scope.expense).then(function(response)
                    {
                        $scope.expense = {};
                        $scope.refreshExpenseList();
                        $scope.isOnEditMode = false;
                    });
                }
                else
                {
                    $scope.expense.put().then(function(response)
                    {
                        $scope.expense = {};
                        $scope.refreshExpenseList();
                    });
                }
            };

            $scope.CancelEdit = function()
            {
                $scope.expense = {};
                $scope.isOnEditMode = false;
            };

            $scope.editExpense = function(expense)
            {
                expense.amount = Number(expense.amount);
                expense.isPaid = (expense.isPaid) ? true : false;
                $scope.expense = expense;
                $scope.isOnEditMode = true;
            };

            $scope.deleteExpense = function(expense)
            {
                expense.remove().then(function(data)
                {
                    $scope.refreshExpenseList();
                });
            };

        });
})();