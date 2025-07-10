export interface ICategoryFilter {
  selectBusinesSlug: string;
  setSelectBusinesSlug: (selectBusinesSlug: string) => void;
}

export interface IModalFilter {
  selectBusinesSlug: string;
  setSelectBusinesSlug: (selectBusinesSlug: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export interface IResultBusines {
  selectBusinesSlug: string;
}
