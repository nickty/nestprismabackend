import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmartks(@getUser('id') userId: string) {
    return this.bookmarkService.getBookmartks(userId);
  }

  @Post()
  createBookmark(
    @getUser('id') userId: string,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(userId, dto);
  }

  @Get(':id')
  getBookMarkById(
    @getUser('id') userId: string,
    @Param('id') bookmarkId: string,
  ) {
    return this.bookmarkService.getBookMarkById(userId, bookmarkId);
  }

  @Patch(':id')
  editBookMarkById(
    @getUser('id') userId: string,
    @Param('id') bookmarkId: string,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.bookmarkService.editBookMarkById(userId, bookmarkId, dto);
  }

  @Delete(':id')
  deleteBookMarkById(
    @getUser('id') userId: string,
    @Param('id') bookmarkId: string,
  ) {
    return this.bookmarkService.deleteBookMarkById(userId, bookmarkId);
  }
}
