// import InputLabel from '@/Components/InputLabel';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, useForm, Link } from '@inertiajs/react';
// import TextInput from '@/Components/TextInput';
// import InputError from '@/Components/InputError';
// import TextAreaInput from '@/Components/TextAreaInput';
// import SelectInput from '@/Components/SelectInput';

// export default function Create({ auth, project }) {
//   const { data, setData, post, errors, reset } = useForm({
//     image: null,
//     name: project.name || "",
//     status: project.status || "",
//     description: project.description || "",
//     due_date: project.due_date || ""
//   });

 

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(data); // Vérifie les données avant l'envoi
//     console.log(route('project.update', project.id));
//     put(route('project.update', project.id,data));
//     };


//   // const onSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(data)
    
//   //   const formData = new FormData();
//   //   if (data.image) {
//   //     formData.append('image', data.image);
//   //   }
//   //   formData.append('name', data.name);
//   //   formData.append('status', data.status);
//   //   formData.append('description', data.description);
//   //   formData.append('due_date', data.due_date);

//   //   put(route('project.update',project.id),
//   //     {
//   //     data: formData,
//   //     headers: {
//   //       'Content-Type': 'multipart/form-data',
//   //     }
//   //   });
//   // };

  
  

//   return (
//     <AuthenticatedLayout user={auth.user} header={
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//           Edit project "{project.name}"
//         </h2>
//       </div>
//     }>
//       <Head title="New Project" />
//       <div className="py-12">
//         <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//             <div className="p-6 text-gray-900 dark:text-gray-100">
//               <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

//                 {project.image_path && ( 
//                 <div className="mb-4">
//                   <img src={project.image_path} className="w-64" />
//                 </div> )}

//                 <div>
//                   <InputLabel htmlFor="project_image_path" value="Project Image" />
//                   <TextInput 
//                     id="project_image_path" 
//                     type="file" 
//                     name="image" 
//                     className="mt-1 block w-full"
//                     onChange={(e) => setData("image", e.target.files[0])}
//                   />
//                   <InputError message={errors.image} className="mt-2" />
//                 </div>
                
//                 <div className="mt-4">
//                   <InputLabel htmlFor="project_name" value="Project Name" />
//                   <TextInput 
//                     id="project_name" 
//                     type="text"
//                     name="name"
//                     value={data.name}
//                     className="mt-1 block w-full"
//                     isFocused={true}
//                     onChange={(e) => {
//                       console.log("Nom changé :", e.target.value); // Debug
//                       setData("name", e.target.value);
//                       }}  />
//                   <InputError message={errors.name} className="mt-2" />
//                 </div>
                
//                 <div className="mt-4">
//                   <InputLabel htmlFor="project_description" value="Project Description" />
//                   <TextAreaInput 
//                     id="project_description" 
//                     name="description" 
//                     value={data.description}
//                     className="mt-1 block w-full"
//                     onChange={(e) => setData("description", e.target.value)}
//                   />
//                   <InputError message={errors.description} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                   <InputLabel htmlFor="project_due_date" value="Project Deadline" />
//                   <TextInput 
//                     id="project_due_date"
//                     type="date" 
//                     name="due_date" 
//                     value={data.due_date}
//                     className="mt-1 block w-full"
//                     onChange={(e) => setData("due_date", e.target.value)}
//                   />
//                   <InputError message={errors.due_date} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                   <InputLabel htmlFor="project_status" value="Project Status" />
//                   <SelectInput
//                     name="status"
//                     id="project_status" 
//                     className="mt-1 block w-full"
//                     onChange={(e) => setData("status", e.target.value)}
//                   >
//                     <option value="">Select Status</option>
//                     <option value="pending">Pending</option>
//                     <option value="in_progress">In Progress</option>
//                     <option value="completed">Completed</option>
//                   </SelectInput>
//                   <InputError message={errors.status} className="mt-2" />
//                 </div>

//                 <div className="mt-4 text-right">
//                   <Link href={route('project.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
//                     Cancel
//                   </Link>
//                   <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>  
//           </div>                
//         </div>                
//       </div>                
//     </AuthenticatedLayout>
//   );
// }





import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';

export default function Edit({ auth, project, translations }) {
  const { data, setData, post, errors, processing } = useForm({
    _method: 'PUT',  // Simule une requête PUT avec FormData
    image: null,
    name: project.name || "",
    status: project.status || "",
    description: project.description || "",
    due_date: project.due_date || ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées:", data);
    
    // Utilisez post avec _method: 'PUT' plutôt que put() directement
    post(route('project.update', project.id), {
      forceFormData: true,  // Force l'utilisation de FormData pour les fichiers
      preserveScroll: true, // Garde la position de scroll
      onError: (errors) => {
        console.error("Erreurs de validation:", errors);
      },
      onSuccess: () => {
        console.log("Mise à jour réussie!");
      }
    });
  };

  return (
    <AuthenticatedLayout user={auth.user} header={
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {/* Edit project*/} {translations.edit_title} "{project.name}" 
        </h2>
      </div>
    }>
      {/* <Head title="Edit Project" /> */}
      <Head title={translations.edit_title} />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

                {project.image_path && ( 
                <div className="mb-4">
                  <img src={project.image_path} className="w-64" alt="Project thumbnail" />
                </div> )}

                <div>
                  <InputLabel htmlFor="project_image_path" value={translations.image} /> {/*value="Project Image"*/}
                  <TextInput 
                    id="project_image_path" 
                    type="file" 
                    name="image" 
                    className="mt-1 block w-full"
                    onChange={(e) => setData("image", e.target.files[0])}
                  />
                  <InputError message={errors.image} className="mt-2" />
                </div>
                
                <div className="mt-4">
                  <InputLabel htmlFor="project_name" value={translations.name} /> {/*value="Project Name"*/}
                  <TextInput 
                    id="project_name" 
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                
                <div className="mt-4">
                  <InputLabel htmlFor="project_description" value={translations.description} /> {/*value="Project Description"*/}
                  <TextAreaInput 
                    id="project_description" 
                    name="description" 
                    value={data.description}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("description", e.target.value)}
                  />
                  <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="project_due_date" value={translations.due_date}/> {/*value="Project Deadline"*/}
                  <TextInput 
                    id="project_due_date"
                    type="date" 
                    name="due_date" 
                    value={data.due_date}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("due_date", e.target.value)}
                  />
                  <InputError message={errors.due_date} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="project_status" value={translations.status} /> {/*value="Project Status"*/}
                  <SelectInput
                    name="status"
                    id="project_status" 
                    className="mt-1 block w-full"
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                  >
                    <option value="">{/*Select Status*/} {translations.select_status}</option>
                    <option value="pending">{/*Pending*/} {translations.pending}</option>
                    <option value="in_progress">{/*In Progress*/} {translations.in_progress}</option>
                    <option value="completed">{/*Completed*/} {translations.completed}</option>
                  </SelectInput>
                  <InputError message={errors.status} className="mt-2" />
                </div>

                <div className="mt-4 text-right">
                  <Link href={route('project.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                    {/* Cancel */} {translations.cancel}
                  </Link>
                  <button 
                    type="submit"
                    disabled={processing}
                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 disabled:opacity-50"
                  >
                    {/* {processing ? 'Updating...' : 'Update Project'} */}
                    {processing ? translations.updating_button : translations.update_button}
                  </button>
                </div>
              </form>
            </div>  
          </div>                
        </div>                
      </div>                
    </AuthenticatedLayout>
  );
}