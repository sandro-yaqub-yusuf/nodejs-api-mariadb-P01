import { EntityRepository, Repository } from 'typeorm';
import Page from '../models/Page';

@EntityRepository(Page)
export default class PetRepository extends Repository<Page> {}
