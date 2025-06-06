import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';

export default function Edit({ auth, task, projects, users, translations }) {
  const { data, setData, post, errors, processing } = useForm({
    _method: 'PUT',  // Simule une requête PUT avec FormData
    image: null,
    name: task.name || "",
    status: task.status || "",
    description: task.description || "",
    due_date: task.due_date || "",
    project_id: task.project_id || "",
    priority: task.priority || "",
    assigned_user_id: task.assigned_user_id || ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées:", data);
    console.error('ID:', task.id);

    if (auth.user.role == "admin") {
    // Utilisez post avec _method: 'PUT' plutôt que put() directement
    post(route('task.update', task.id), {
      forceFormData: true,  // Force l'utilisation de FormData pour les fichiers
      preserveScroll: true, // Garde la position de scroll
      onError: (errors) => {
        console.error("Erreurs de validation:", errors);
      },
      onSuccess: () => {
        console.log("Mise à jour réussie!");
      }
    });
  }else {
    console.log("task.id :", task.id);

    post(route('myTasks.update', task.id ), {
      forceFormData: true,  // Force l'utilisation de FormData pour les fichiers
      preserveScroll: true, // Garde la position de scroll
      onError: (errors) => {
        console.error("Erreurs de validation:", errors);
      },
      onSuccess: () => {
        console.log("Mise à jour réussie!");
      }
    });
}
  };

  return (
    <AuthenticatedLayout user={auth.user} header={
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {/* Edit task "{task.name}" */} 
          {translations.edit_title} "{task.name}"
        </h2>
      </div>
    }>
      {/* <Head title="Edit Task" /> */}
      <Head title={translations.edit_title} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

                {task.image_path && ( 
                <div className="mb-4">
                  <img src={task.image_path} className="w-64" alt="Task thumbnail" />
                </div> )}
                {auth.user.role == "admin" &&
                <>
                <div>
                                  <InputLabel htmlFor="task_project_id" value={translations.project} /> {/*value="Project"*/}
                                  <SelectInput
                                    name="project_id"
                                    id="task_project_id" 
                                    value={data.project_id}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("project_id", e.target.value)}
                                  >
                                    <option value="">{/*Select Project*/} {translations.select_project} </option>
                                    {projects.data.map(project => (
                                        <option value={project.id} key={project.id}>
                                              {project.name}
                                        </option>
                                    ))}
                                  </SelectInput>
                                  <InputError message={errors.project_id} className="mt-2" />
                                </div>
                
                                <div className="mt-4">
                                  <InputLabel htmlFor="task_image_path" value={translations.task_image} /> {/*value="Task Image"*/} 
                                  <TextInput 
                                    id="task_image_path" 
                                    type="file" 
                                    name="image" 
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("image", e.target.files[0])}
                                  />
                                  <InputError message={errors.image} className="mt-2" />
                                </div>
                                
                                <div className="mt-4">
                                  <InputLabel htmlFor="task_name" value={translations.task_name} /> {/*value="Task Name"*/}
                                  <TextInput 
                                    id="task_name" 
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
                                  <InputLabel htmlFor="task_description" value={translations.task_description} /> {/*value="Task Description"*/}
                                  <TextAreaInput 
                                    id="task_description" 
                                    name="description" 
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("description", e.target.value)}
                                  />
                                  <InputError message={errors.description} className="mt-2" />
                                </div>
                
                                <div className="mt-4">
                                  <InputLabel htmlFor="task_due_date" value={translations.task_deadline} /> {/*value="Task Deadline"*/}
                                  <TextInput 
                                    id="task_due_date"
                                    type="date" 
                                    name="due_date" 
                                    value={data.due_date}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("due_date", e.target.value)}
                                  />
                                  <InputError message={errors.due_date} className="mt-2" />
                          </div>
                          </>
                          }

                                <div className="mt-4">
                                  <InputLabel htmlFor="task_status" value={translations.task_status} /> {/*value="Task Status"*/}
                                  <SelectInput
                                    name="status"
                                    id="task_status" 
                                    value={data.status}
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

                                {auth.user.role == "admin" &&
                
                                <div className="mt-4">
                                  <InputLabel htmlFor="task_priority" value={translations.task_priority} /> {/*value="Task Priority"*/}
                                  <SelectInput
                                    name="priority"
                                    id="task_priority" 
                                    value={data.priority}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("priority", e.target.value)}
                                  >
                                    <option value="">{/*Select Priority*/} {translations.select_priority} </option>
                                    <option value="low">{/*Low*/} {translations.low}</option>
                                    <option value="medium">{/*Medium*/} {translations.medium}</option>
                                    <option value="high">{/*High*/} {translations.high}</option>
                                  </SelectInput>
                                  <InputError message={errors.priority} className="mt-2" />
                                </div>
                                }
                                
                                {auth.user.role == "admin" &&
                                <div className="mt-4">
                                  <InputLabel htmlFor="task_assigned_user" value={translations.assigned_user} /> {/*value="Assigned User"*/}
                                  <SelectInput
                                    name="assigned_user_id"
                                    id="task_assigned_user" 
                                    value={data.assigned_user_id}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("assigned_user_id", e.target.value)}
                                  >
                                    <option value="">{/*Select User*/} {translations.select_user}</option>
                                    {users.data.map(user => (
                                        <option value={user.id} key={user.id}>
                                              {user.name}
                                        </option>
                                    ))}
                                    
                                  </SelectInput>
                                  <InputError message={errors.assigned_user_id} className="mt-2" />
                                </div>   
                                }      
                
                                <div className="mt-4 text-right">
                                {auth.user.role == "admin" &&
                                  <Link href={route('task.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                                    {/* Cancel */} {translations.cancel}
                                  </Link>
                                }

                                {auth.user.role == "user" &&
                                  <Link href={route('myTasks')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                                    {/* Cancel */} {translations.cancel}
                                  </Link>
                                }

                                  <button type="submit" className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    {/* Update Task */}
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