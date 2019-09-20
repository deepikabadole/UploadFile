<?php

public function showUploadFile(Request $request) {
        $file = $request->file('image');
        //Move Uploaded File
        $destinationPath = 'uploads';
        $file->move($destinationPath,$file->getClientOriginalName());

        return response()->json([
            'message' => 'success',
            'file' => $destinationPath."/".$file->getClientOriginalName(),
        ], 200);
    }


 ?>