import { usePage } from '@inertiajs/react';

export const useTranslations = () => {
  const { trans_const } = usePage().props;

  // Crée les maps de statut et priorité à partir de trans_const
  const PROJECT_STATUS_TEXT_MAP = {
    'pending': trans_const.pending,
    'in_progress': trans_const.in_progress,
    'completed': trans_const.completed_project,
  };

  const TASK_STATUS_TEXT_MAP = {
    'pending': trans_const.pending,
    'in_progress': trans_const.in_progress,
    'completed': trans_const.completed_task,
  };

  const TASK_PRIORITY_TEXT_MAP = {
    'low': trans_const.low,
    'medium': trans_const.medium,
    'high': trans_const.high,
  };

  return {
    PROJECT_STATUS_TEXT_MAP,
    TASK_STATUS_TEXT_MAP,
    TASK_PRIORITY_TEXT_MAP,
  };
};
