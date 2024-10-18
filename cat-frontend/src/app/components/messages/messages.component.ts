import { Component, inject, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class MessagesComponent implements OnInit {
  message: string = '';
  messages: string[] = [];
  websocketService: WebsocketService = inject(WebsocketService)
  
  constructor() { }

  ngOnInit(): void {
    this.websocketService.connect('ws://localhost:8000/ws/messages/');

    this.websocketService.getMessages().subscribe((msg: string) => {
      this.messages.push(JSON.parse(msg).message);
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.websocketService.sendMessage(this.message);
      this.message = ''; // Очистка поля после отправки
    }
  }
}