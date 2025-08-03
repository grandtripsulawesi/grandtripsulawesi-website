'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { useMemo } from 'react';
import { ArmadaType } from '@/app/types';
import { XMarkIcon } from '@/icons';
import Image from 'next/image';
import Icon from './Icon';
import OrderForm from './OrderForm';

// Helper function to parse URL params into ArmadaType
const parseArmadaFromParams = (params: URLSearchParams): ArmadaType | null => {
  const modal = params.get('modal');
  if (modal !== 'true') return null;

  const name = params.get('name');
  const imagePath = params.get('imageUrl');
  const person = params.get('person');
  const transmission = params.get('transmission');
  const rental = params.get('rental');

  // Validate required fields
  if (!name || !imagePath || !person || !transmission || !rental) {
    return null;
  }

  return {
    name,
    imagePath,
    armadaDetail: {
      person: parseInt(person, 10),
      transmission,
      rental: parseInt(rental, 10),
    },
  };
};

// Helper function to clear dialog params
const clearDialogParams = () => ({
  modal: false,
  name: '',
  imageUrl: '',
  person: '',
  transmission: '',
  rental: '',
});

const CarDialog = ({
  params,
  updateUrl,
}: {
  params: URLSearchParams;
  updateUrl: (pathname: string, param: Record<string, any>) => void;
}) => {
  // Use useMemo to avoid unnecessary recalculations
  const armadaDetail = useMemo(() => parseArmadaFromParams(params), [params]);

  const handleClose = () => {
    updateUrl('/', clearDialogParams());
  };

  if (!armadaDetail) return null;

  return (
    <Dialog open={params.get('modal') === 'true'}>
      <DialogContent
        className="w-3/5 h-auto max-w-none"
        showCloseButton={false}
      >
        <DialogHeader className="flex-row justify-between items-baseline">
          <DialogTitle className="font-heading">Booking Detail</DialogTitle>
          <DialogClose className="ml-auto" onClick={handleClose}>
            <XMarkIcon />
          </DialogClose>
        </DialogHeader>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <Image
              src={armadaDetail.imagePath}
              alt={armadaDetail.name}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <h2 className="font-heading capitalize mx-auto text-2xl font-semibold mb-2">
              {armadaDetail.name}
            </h2>
            <div className="w-full flex space-x-4 justify-center">
              <span className="flex items-center space-x-1">
                <Icon
                  url="/images/armada/icons/armada_user.webp"
                  alt=""
                  height={20}
                  width={20}
                  className="size-3"
                />
                <p>{armadaDetail.armadaDetail.person}</p>
              </span>
              <span className="flex items-center space-x-1">
                <Icon
                  url="/images/armada/icons/armada_transmission.webp"
                  alt=""
                  height={20}
                  width={20}
                  className="size-3"
                />
                <p className="capitalize">
                  {armadaDetail.armadaDetail.transmission}
                </p>
              </span>
              <span className="flex items-center space-x-1">
                <Icon
                  url="/images/armada/icons/armada_rupiah.webp"
                  alt=""
                  height={20}
                  width={20}
                  className="size-3"
                />
                <p>
                  {armadaDetail.armadaDetail.rental}
                  <span className="text-slate-400">/Jam</span>
                </p>
              </span>
            </div>
          </div>
          <OrderForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDialog;
