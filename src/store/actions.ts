import {Action} from 'redux';
import { Story, ErrorDetail } from './types';

export enum StoryActions {
    ListLoading = 'ListLoading',
    ListLoaded = 'ListLoaded',
    ListLoadingError = 'ListLoadingError',
    AddNew = 'addNew',
    Saving = 'saving',
    Saved = 'saved',
    SavingError = 'savingError'    
}

export interface ActionWithData<T> extends Action {
    payload: T;
}

export interface ListLoadingAction extends Action {
    type: StoryActions.ListLoading
}                                                              

export interface ListLoadingErrorAction extends ActionWithData<ErrorDetail> {
    type: StoryActions.ListLoadingError 
}                                                              

export interface ListLoadedAction extends ActionWithData<Story[]> {
    type: StoryActions.ListLoaded
}

export interface AddNewAction extends Action {
    type: StoryActions.AddNew
}                                                              

export interface SavingErrorAction extends ActionWithData<ErrorDetail> {
    type: StoryActions.SavingError 
}                                                              

export interface SavingAction extends ActionWithData<Story> {
    type: StoryActions.Saving
}

export interface SavedAction extends ActionWithData<Story> {
    type: StoryActions.Saved
}

export function loadList(): ListLoadingAction  {
    return {
        type: StoryActions.ListLoading
    };
}

export function listLoaded(list: Story[]): ListLoadedAction  {
    return {
        type: StoryActions.ListLoaded,
        payload: list
    };
}

export function listLoadingError(error: ErrorDetail): ListLoadingErrorAction  {
    return {
        type: StoryActions.ListLoadingError,
        payload: error
    };
}

export function addNew(): AddNewAction  {
    return {
        type: StoryActions.AddNew
    };
}

export function saving(entity: Story): SavingAction  {
    console.log('Saving: ', entity);
    return {
        type: StoryActions.Saving,
        payload: entity
    };
}

export function saved(entity: Story): SavedAction  {
    return {
        type: StoryActions.Saved,
        payload: entity
    };
}

export type StoryAnyAction =
  | ListLoadingAction
  | ListLoadingErrorAction
  | ListLoadedAction
  | AddNewAction
  | SavingErrorAction
  | SavingAction
  | SavedAction;