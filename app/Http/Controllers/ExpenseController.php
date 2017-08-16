<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExpenseRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Expense;

class ExpenseController extends Controller
{
    public function index()
    {
        $expenses = Expense::all();

        return response($expenses);
    }

    public function store(ExpenseRequest $request)
    {
        $expense = new Expense();

        $expense->title = $request->get('title');
        $expense->amount = $request->get('amount');
        $expense->isPaid = ($request->get('isPaid')) ? 1 : 0 ;

        $expense->save();

        return Response::json($expense, 200, [], JSON_PRETTY_PRINT);
    }

    public function update($id, ExpenseRequest $request)
    {
        $expense = Expense::where('id',$id)->first();

        $expense->title = $request->get('title');
        $expense->amount = $request->get('amount');
        $expense->isPaid = ($request->get('isPaid')) ? 1 : 0 ;

        $expense->save();

        return Response::json($expense, 200, [], JSON_PRETTY_PRINT);
    }

    public function destroy($id)
    {
        $expense = Expense::where('id',$id)->first();
        $expense->delete();

        return Response::json("Expense Deleted!", 200, [], JSON_PRETTY_PRINT);
    }
}
