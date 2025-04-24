import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
// import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP } from "@/constants.jsx";
import { TASK_STATUS_CLASS_MAP } from "@/constants.jsx";

import { useTranslations } from '@/useTranslations';

export default function Dashboard({
  auth,
  myPendingTasks,
  totalPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
  translations
}) {


  const { TASK_STATUS_TEXT_MAP, } = useTranslations();

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {translations.dashboard}
        </h2>
      }
    >
      <Head title={translations.dashboard} />

      <div className="p-6 space-y-8">

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-amber-500 text-lg font-semibold">{translations.pending_tasks}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {myPendingTasks} / {totalPendingTasks}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-blue-500 text-lg font-semibold">{translations.in_progress_tasks}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {myProgressTasks} / {totalProgressTasks}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-green-500 text-lg font-semibold">{translations.completed_tasks}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {myCompletedTasks} / {totalCompletedTasks}
            </p>
          </div>
        </div>

        {/* Active Tasks Table */}
       {/* Active Tasks Table (harmonisé avec Overdue Tasks) */}
<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-8">
  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
    {translations.my_active_tasks} ({activeTasks.data.length})
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th className="py-2 px-4 text-start dark:text-white border-b dark:border-gray-600">{translations.id}</th>
          <th className="py-2 px-4 text-start dark:text-white border-b dark:border-gray-600">{translations.project_name}</th>
          <th className="py-2 px-4 text-start dark:text-white border-b dark:border-gray-600">{translations.task_name}</th>
          <th className="py-2 px-4 text-start dark:text-white border-b dark:border-gray-600">{translations.status}</th>
          <th className="py-2 px-4 text-start dark:text-white border-b dark:border-gray-600">{translations.due_date}</th>
        </tr>
      </thead>
      <tbody>
        {activeTasks.data.length > 0 ? (
          activeTasks.data.map((task) => (
            <tr key={task.id}>
              <td className="py-2 px-4 border-b dark:border-gray-600 text-gray-800 dark:text-gray-300">{task.id}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:underline">
                <Link href={route('my-Project.show', task.project.id)}>
                  {task.project.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:underline">
                <Link href={route('myTasks.show', task.id)}>
                  {task.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b dark:border-gray-600">
                <span className={`px-2 py-1 rounded text-white text-xs ${TASK_STATUS_CLASS_MAP[task.status]}`}>
                  {TASK_STATUS_TEXT_MAP[task.status]}
                </span>
              </td>
              <td className="py-2 px-4 border-b dark:border-gray-600 text-gray-800 dark:text-gray-300">
                {task.due_date}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="py-2 px-4 text-center text-gray-500 dark:text-gray-400">
              {translations.no_active_tasks}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


      </div>
    </AuthenticatedLayout>
  );
}
