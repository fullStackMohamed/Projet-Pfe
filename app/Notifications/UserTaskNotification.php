<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserTaskNotification extends Notification
{
    use Queueable;

    protected $data;

    /**
     * Create a new notification instance.
     */
    public function __construct($data)
    {
        $this->data = $data;

    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                // ->subject('Nouvelle tâche assignée')  // Sujet de l'email
                // ->line('Une nouvelle tâche vous a été assignée.')  // Corps de l'email
                ->subject($this->data['subject'])
                ->line($this->data['message'])
                ->action('Voir la tâche', url('/task/' . $this->data['task_id']))  // Lien vers la tâche
                ->line('Merci de consulter vos tâches assignées.');  // Message de fin
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'subject' => $this->data['subject'],
            'message' => $this->data['message'],
            'task_id' => $this->data['task_id'],
        ];
    }
}
