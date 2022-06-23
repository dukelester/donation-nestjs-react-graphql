import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DonationsService } from './donations.service';
import { CreateDonationInput } from './dto/create-donation.input';
import { OrderByParams} from '../graphql'
@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(@Args('createDonationInput') createDonationInput: Prisma.DonationCreateInput) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?:OrderByParams) {
    return this.donationsService.findAll();
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne(id);
  }

  // @Mutation('updateDonation')
  // update(@Args('updateDonationInput') updateDonationInput: UpdateDonationInput) {
  //   return this.donationsService.update(updateDonationInput.id, updateDonationInput);
  // }

  // @Mutation('removeDonation')
  // remove(@Args('id') id: number) {
  //   return this.donationsService.remove(id);
  // }
}
