import { getCustomRepository } from 'typeorm';
import Page from '../models/Page';
import PageRepository from '../repositories/pageRepository';

class PageService {
    public async getByPage(id: number): Promise<Page | undefined> {
        const pageRepository = getCustomRepository(PageRepository);

        const page = await pageRepository.findOne(id);

        return page;
    }
}

export default new PageService();
