import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


export default function Edit({ auth, user, translations }) {
  const { data, setData, post, errors, processing } = useForm({
    _method: 'PUT',  // Simule une requête PUT avec FormData
    name: user.name || "",
    email: user.email || "",
    password: "",
    password_confirmation: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées:", data);
    
    // Utilisez post avec _method: 'PUT' plutôt que put() directement
    post(route('user.update', user.id), {
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
          {/* Edit user "{user.name}" */}  {translations.edit_title} "{user.name}"
        </h2>
      </div>
    }>
      {/* <Head title="Edit User" /> */}
      <Head title={translations.edit_title} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

                

              <div className="mt-4">
                              <InputLabel htmlFor="user_name" value={translations.name} /> {/*value="User Name"*/}
                                <TextInput 
                                  id="user_name" 
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
                                <InputLabel htmlFor="user_email" value={translations.email} /> {/*value="User Email"*/}
                                <TextInput 
                                  id="user_email" 
                                  type="text"
                                  name="email"
                                  value={data.email}
                                  className="mt-1 block w-full"
                                  onChange={(e) => setData("email", e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                              </div>      
              
                               <div className="mt-4">
                                <InputLabel htmlFor="user_password" value={translations.password}/> {/*value="User Password"*/}
                                <TextInput 
                                  id="user_password"
                                  type="password"
                                  name="password"
                                  value={data.password}
                                  className="mt-1 block w-full"
                                  onChange={(e) => setData("password", e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                              </div>   

                              <div className="mt-4">
                                <InputLabel htmlFor="user_password_confirmation" value={translations.password_confirmation} /> {/*value="Confirmation Password"*/}
                                <TextInput 
                                  id="user_password_confirmation"
                                  type="password"
                                  name="password_confirmation"
                                  value={data.password_confirmation}
                                  className="mt-1 block w-full"
                                  onChange={(e) => setData("password_confirmation", e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                              </div>   

                <div className="mt-4 text-right">
                  <Link href={route('user.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                    {/* Cancel */} {translations.cancel}
                  </Link>
                  <button 
                    type="submit"
                    disabled={processing}
                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 disabled:opacity-50"
                  >
                    {/* {processing ? 'Updating...' : 'Update User'} */}
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