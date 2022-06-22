import { Injectable } from '@nestjs/common';
import { CreateDonationInput } from './dto/create-donation.input';
import { UpdateDonationInput } from './dto/update-donation.input';
import {PrismaService} from '../../prisma/prisma.service'

@Injectable()
export class DonationsService {

  constructor(private readonly prismaService: PrismaService){}

  create(createDonationInput: CreateDonationInput) {
    return 'This action adds a new donation';
  }

  findAll() {
    return this.prismaService.donation.findMany() 
  }
  findOne(id: number) {
    return this.prismaService.donation.findUnique({
      where: {id: id},
    });
  }

  // update(id: number, updateDonationInput: UpdateDonationInput) {
  //   return `This action updates a #${id} donation`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} donation`;
  // }
}
