'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useMemo } from 'react';
import Image from 'next/image';
import OrderForm from './OrderForm';
import { clearDialogParams, extractParamsToArmadaType } from '@/lib/utils';
import useURLState from '@/hooks/useUrlState';
import { ArmadaType } from '@/types';

const FleetDialog = () => {
  const { searchParams, updateUrl } = useURLState();
  // Use useMemo to avoid unnecessary recalculations
  const armada = useMemo(
    () => extractParamsToArmadaType(searchParams),
    [searchParams]
  ) as ArmadaType;

  const handleClose = () => {
    updateUrl('/', clearDialogParams(searchParams));
  };

  if (!armada) return null;

  return (
    <Dialog open={Boolean(searchParams.get('modal')) === true}>
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
              src={armada.imageUrl}
              alt={armada.name}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <h2 className="font-heading capitalize mx-auto text-2xl font-semibold mb-2">
              {armada.name}
            </h2>
            <div className="w-full flex space-x-4 justify-center">
              <div className="flex flex-col items-center space-x-1">
                <p className="text-xs">Seats</p>
                <p className="text-xl">{armada.armadaDetail.person}</p>
              </div>
              <span className="flex flex-col items-center space-x-1">
                <p className="text-xs">Transmission</p>
                <p className="capitalize text-lg">
                  {armada.armadaDetail.transmission}
                </p>
              </span>
              {/* <span className="flex flex-col items-left space-x-1">
                <p className="text-xs">Rental Cost</p>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <p className="text-xs font-bold">Lepas Kunci:</p>
                    <p className="text-lg">
                      {`IDR `}
                      {!armada.armadaDetail.rental.basic
                        ? '-'
                        : formatNumber(armada.armadaDetail.rental.basic)}
                      <span className="text-slate-400 text-sm">/Hari</span>
                    </p>
                  </li>

                  <li>
                    <p className="text-xs font-bold">All-In: </p>
                    <p className="text-lg">
                      IDR {formatNumber(armada.armadaDetail.rental.allin)}
                      <span className="text-slate-400 text-sm">/Hari</span>
                    </p>
                    <p className="text-xs">*Termasuk Driver & BBM</p>
                  </li>
                </ul>
              </span> */}
            </div>
          </div>
          <OrderForm
            fleet={armada.name}
            handleClose={handleClose}
            rentalCost={armada.armadaDetail.rental}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FleetDialog;
