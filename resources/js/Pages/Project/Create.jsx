// import InputLabel from '@/Components/InputLabel';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, useForm, Link } from '@inertiajs/react';
// import TextInput from '@/Components/TextInput';
// import InputError from '@/Components/InputError';
// import TextAreaInput from '@/Components/TextAreaInput';
// import { Select } from '@headlessui/react';
// import SelectInput from '@/Components/SelectInput';

// export default function Create({ auth }) {
//   const {data, setData, post, errors, reset} = useForm({
//        image: '',
//        name: '',
//        status: '',
//        description: '',
//        due_date: ''       
//   })  

//   const onSubmit = (e) => {
//       e.preventDefault(); 
      
//       post(route('project.store'))
//   }


//   return (
//     <AuthenticatedLayout
//     user= {auth.user}
//     header={
//     <div className="flex justify-between items-center"> 
//         <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//             Create new Project                 
//         </h2>
        
//     </div>  
//     }   
//     >
//           <Head title="new Project" />
//           <div className="py-12">
//               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                  <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                     <div className="p-6 text-gray-900 dark:text-gray-100">
//                         <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow
//                         sm:rounded-lg">
//                             <pre>{data.image}</pre>
//                             <div>
//                                 <InputLabel htmlFor="project_image_path" value="Project Image" />
//                                 <TextInput 
//                                 id="project_image_path" 
//                                 type="file" 
//                                 name="image" 
//                                 className="mt-1 block w-full"
//                                 onChange={(e) => setData("image", e.target.files[0])}
//                                 />
//                                 <InputError message={errors.image} className="mt-2"/>
//                             </div>

//                             <div className="mt-4">
//                                 <InputLabel htmlFor="project_name" value="Project Name" />
//                                 <TextInput 
//                                 id="project_name" 
//                                 type="text"
//                                 name="name"
//                                 value={data.name}
//                                 className="mt-1 block w-full"
//                                 isFocused={true}
//                                 onChange= {(e) => setData("name", e.target.value)}
//                                 />
//                                 <InputError message={errors.name} className="mt-2"/>
//                             </div>

//                             <div className="mt-4">
//                                 <InputLabel 
//                                 htmlFor="project_description" 
//                                 value="Project Description" 
//                                 />
//                                 <TextAreaInput 
//                                 id="project_description" 
//                                 name="description" 
//                                 value={data.description}
//                                 className="mt-1 block w-full"
//                                 onChange= {(e) => setData("description", e.target.value)}
//                                 />
//                                 <InputError message={errors.description} className="mt-2"/>
//                             </div>

//                             <div className="mt-4">
//                                 <InputLabel 
//                                 htmlFor="project_due_date" 
//                                 value="Project Deadline" 
//                                 />

//                                 <TextInput 
//                                 id="project_due_date"
//                                 type="date" 
//                                 name="due_date" 
//                                 value={data.due_date}
//                                 className="mt-1 block w-full"
//                                 onChange= {(e) => setData("due_date", e.target.value)}
//                                 />
//                                 <InputError message={errors.due_date} className="mt-2"/>
//                             </div>

//                             <div className="mt-4">
//                                 <InputLabel 
//                                 htmlFor="project_status" 
//                                 value="Project Status" 
//                                 />
//                                 <SelectInput
//                                 name="status"
//                                 id="project_status" 
//                                 className="mt-1 block w-full"
//                                 onChange= {(e) => setData("status", e.target.value)}
//                                 >
//                                     <option value="">Select Status</option>
//                                     <option value="pending">Pending</option>
//                                     <option value="in_progress">In Progress</option>
//                                     <option value="completed">Completed</option>
//                                 </SelectInput>
//                                 <InputError message={errors.project_status} className="mt-2"/>
//                             </div>

//                             <div className="mt-4 text-right" >
//                                 <Link href={route('project.index')}
//                                 className="bg-gray-100 py-1 px-3 text-gray-800 rounded
//                                 shadow transition-all hover:bg-gray-200 mr-2">
//                                     Cancel
//                                 </Link>

//                                 <button className="bg-emerald-500 py-1 px-3 text-white 
//                                 rounded shadow transition-all hover:bg-emerald-600">
//                                     Submit
//                                 </button>

//                             </div>

                           
//                         </form> 
//                     </div>  
//                  </div>                
//               </div>                
//            </div>                
              
//     </AuthenticatedLayout>
//   )
// }



import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';

export default function Create({ auth, translations }) {
  const { data, setData, post, errors, reset } = useForm({
    image: null,
    name: '',
    status: '',
    description: '',
    due_date: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    if (data.image) {
      formData.append('image', data.image);
    }
    formData.append('name', data.name);
    formData.append('status', data.status);
    formData.append('description', data.description);
    formData.append('due_date', data.due_date);

    post(route('project.store'), {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  };

  return (
    <AuthenticatedLayout user={auth.user} header={
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {/* Create new Project */} {translations.create_title}

        </h2>
      </div>
    }>
      {/* <Head title="New Project" /> */}
      <Head title={translations.new_project} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div>
                  <InputLabel htmlFor="project_image_path"  value={translations.image} /> {/*value="Project Image"*/}
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
                  <InputLabel htmlFor="project_name" value={translations.name} />{/*value="Project Name"*/}
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
                  <InputLabel htmlFor="project_description" value={translations.description} />{/*value="Project Description"*/}
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
                  <InputLabel htmlFor="project_due_date" value={translations.due_date} />{/*value="Project Deadline"*/}
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
                  <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                    {/* Submit */} {translations.submit}

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

