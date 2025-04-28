import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    const item = this.items.find(item => item.id === id);
    if (!item) {
      throw new Error('商品が存在しません');
    }
    return item;
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  updataStatus(id: string): Item {
    const item = this.findById(id);
    item.status = item.status = 'SOLD_OUT';
    return item;
  }
}
