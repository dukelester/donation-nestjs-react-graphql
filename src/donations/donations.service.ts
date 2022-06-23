import { Injectable } from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service'
import { Prisma } from '@prisma/client';

@Injectable()
export class DonationsService {

  constructor(private readonly prismaService: PrismaService){}

  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prismaService.donation.create({
      
      data: createDonationInput
    });
  }

  findAll( orderBy?: {field:string, direction?: string}) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {}
    return this.prismaService.donation.findMany({
      orderBy: {
        [field]: direction,
      }
    }) 
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
