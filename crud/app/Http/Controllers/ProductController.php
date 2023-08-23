<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\File;


class ProductController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        try {
            
            $products = new Products();
            $products->name = $request->input('name');
            $products->description = $request->input('description');
            if($request->hasFile('image')){
                $image = $request->file('image');
                $ext = $image->extension();
                $file = time().'.'.$ext;
                $image->storeAs('public/customer',$file);
                $products->image = $file;
            }
            $products->price = $request->input('price');
            $products->quantity = $request->input('quantity');
            $products->save();

            return response()->json('Product created');
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function show($id)
{
    $products = Products::find($id);
    $imagePath = public_path('public/customer' . $products->image);
    if (file_exists($imagePath)) {
        $imageData = file_get_contents($imagePath);
    
        $base64Image = base64_encode($imageData);
    
        $products->image_data = $base64Image;
    }
    return response()->json($products);
}
    public function update(Request $request, $id)
    {
        try
        {
            $products = Products::find($id);
            $products->name = $request->input('name');
            $products->description = $request->input('description');
            if($request->hasFile('image')){
                $image = $request->file('image');
                $ext = $image->extension();
                $file = time().'.'.$ext;
                $image->move(public_path('public/customer'), $file);
                $products->image = $file;
            }
            $products->price = $request->input('price');
            $products->quantity = $request->input('quantity');
            $products->save();
        
            return response()->json('Products updated');
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function destroy($id)
    {
        $products = Products::find($id);
        $products->delete();
        return response()->json('deleted');
    }
}