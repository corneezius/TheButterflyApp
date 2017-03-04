import { Component } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Idea, MessageType } from '../../../../imports/models';
import template from './ideas.html';

@Component({
  template
})
export class IdeasPage {
  ideas: Observable<Idea[]>;

  constructor() {
    this.ideas = this.findIdeas();
  }

  private findIdeas(): Observable<Idea[]> {
    return Observable.of([
      {
        _id: '0',
        title: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          content: 'You on your way?',
          createdAt: Moment().subtract(1, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '1',
        title: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          createdAt: Moment().subtract(2, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '2',
        title: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          createdAt: Moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '3',
        title: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          content: 'Look at my mukluks!',
          createdAt: Moment().subtract(4, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '4',
        title: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          content: 'This is wicked good ice cream.',
          createdAt: Moment().subtract(2, 'weeks').toDate(),
          type: MessageType.TEXT
        }
      }
    ]);
  }

  removeIdea(chat: Idea): void {
    this.ideas = this.ideas.map<Idea[]>(ideasArray => {
      const chatIndex = ideasArray.indexOf(chat);
      ideasArray.splice(chatIndex, 1);

      return ideasArray;
    });
  }
}
