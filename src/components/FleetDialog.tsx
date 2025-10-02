'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useMemo } from 'react';
import { ArmadaType } from '@/app/types';
import Image from 'next/image';
import OrderForm from './OrderForm';
import { formatNumber } from '@/lib/utils';

// Helper function to parse URL params into ArmadaType
const parseArmadaFromParams = (params: URLSearchParams): ArmadaType | null => {
  const modal = params.get('modal');
  if (modal !== 'true') return null;

  const name = params.get('name');
  const imagePath = params.get('imageUrl');
  const person = params.get('person');
  const transmission = params.get('transmission');
  const basic = params.get('basicFee');
  const allin = params.get('allinFee');

  // Validate required fields
  if (!name || !imagePath || !person || !transmission || !basic || !allin) {
    return null;
  }

  return {
    name,
    imagePath,
    armadaDetail: {
      person: parseInt(person, 10),
      transmission,
      rental: {
        basic: parseInt(basic, 10),
        allin: parseInt(allin, 10),
      },
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

const FleetDialog = ({
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
    <Dialog open={Boolean(params.get('modal')) === true}>
      <DialogContent
        className="!w-3/5 h-auto !max-w-none"
        showCloseButton={false}
      >
        <DialogHeader
          hidden
          className="flex-row justify-between items-baseline"
        >
          <DialogTitle className="font-heading">Booking Detail</DialogTitle>
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
              <div className="flex flex-col items-center space-x-1">
                <p className="text-xs">Seats</p>
                <p className="text-xl">{armadaDetail.armadaDetail.person}</p>
              </div>
              <span className="flex flex-col items-center space-x-1">
                <p className="text-xs">Transmission</p>
                <p className="capitalize text-lg">
                  {armadaDetail.armadaDetail.transmission}
                </p>
              </span>
              <span className="flex flex-col items-left space-x-1">
                <p className="text-xs">Rental Cost</p>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <p className="text-xs font-bold">Lepas Kunci:</p>
                    <p className="text-lg">
                      {`IDR `}
                      {!armadaDetail.armadaDetail.rental.basic
                        ? '-'
                        : formatNumber(armadaDetail.armadaDetail.rental.basic)}
                      <span className="text-slate-400 text-sm">/Hari</span>
                    </p>
                  </li>

                  <li>
                    <p className="text-xs font-bold">All-In: </p>
                    <p className="text-lg">
                      IDR {formatNumber(armadaDetail.armadaDetail.rental.allin)}
                      <span className="text-slate-400 text-sm">/Hari</span>
                    </p>
                    <p className="text-xs">*Termasuk Driver & BBM</p>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <OrderForm handleClose={handleClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FleetDialog;
