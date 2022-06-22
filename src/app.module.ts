import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver } from '@nestjs/apollo';
import { DonationsModule } from './donations/donations.module';
// import {GraphQLDateTime} from 'graphql-iso-date'
@Module({
  imports: [GraphQLModule.forRoot({
    playground: false,
    plugins:[ApolloServerPluginLandingPageLocalDefault()],
    typePaths: ['./**/*.graphql'],
    driver:ApolloDriver,
    // resolvers:{DateTime: GraphQLDateTime},
  }), DonationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
