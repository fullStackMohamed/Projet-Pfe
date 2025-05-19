<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|string|in:pending,in_progress,completed',
            'due_date' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        // return [
        //     'name.required' => 'Le nom du projet est obligatoire.',
        //     'description.required' => 'La description du projet est obligatoire.',
        //     'status.required' => 'Le statut du projet est obligatoire.',
        //     'status.in' => 'Le statut doit être l\'un des suivants : en attente, en cours, terminé.',
        //     'due_date.required' => 'La date d\'échéance est obligatoire.',
        //     'due_date.date' => 'La date d\'échéance doit être une date valide.',
        //     'image.image' => 'Le fichier doit être une image.',
        //     'image.mimes' => 'L\'image doit être de type : jpeg, png, jpg, gif, svg.',
        //     'image.max' => 'L\'image ne doit pas dépasser 2 Mo.',
        // ];

            return [
                'name.required' => 'The project name is required.',
                'description.required' => 'The project description is required.',
                'status.required' => 'The project status is required.',
                'status.in' => 'The status must be one of the following: pending, in progress, completed.',
                'due_date.required' => 'The due date is required.',
                'due_date.date' => 'The due date must be a valid date.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be of type: jpeg, png, jpg, gif, svg.',
                'image.max' => 'The image must not be larger than 2MB.',
            ];
    }


}
